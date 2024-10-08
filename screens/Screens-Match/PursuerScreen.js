import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Dimensions, Animated, PanResponder } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { users as usersArray } from './utils/data.js';
import Card from './components/Card.js';
import Footer from './components/Footer.js';

const { width, height } = Dimensions.get('screen');

export default function matchScreen() {
  const [users, setUsers] = useState(usersArray);

  const swipe = useRef(new Animated.ValueXY()).current;
  const titlSign = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 1000,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  })


  const removeTopCard = useCallback(() => {
    setUsers((prevState)=>prevState.slice(1));
    swipe.setValue({x:0, y:0});
  }, [swipe])

  const handleChoice = useCallback((direction) => {
    Animated.timing(swipe.x, {
      toValue: direction * 500, 
      duration: 2000,
      useNativeDriver: true
    }).start(removeTopCard)
  }, [removeTopCard, swipe.x]);
  useEffect(() => {
    if (!users.length) {
      setUsers(usersArray); // Re-initialize with original data if the array is empty
    }
  }, [users]);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <StatusBar hidden={true} />
      {users
        .map(
          (
            {
              name,
              EducationalInstitutions,
              Job,
              Sub_Job,
              EducationalStatus,
              Languagues,
              Country,
              age,
              image,
            },
            index
          ) => {
            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {};
            return (
              <Card
                key={index} // Use index or a unique identifier instead of name
                name={name}
                EducationalInstitutions={EducationalInstitutions}
                Job={Job}
                Sub_Job={Sub_Job}
                image={image}
                EducationalStatus={EducationalStatus}
                Languagues={Languagues}
                Country={Country}
                age={age}
                isFirst={isFirst}
                swipe={swipe}
                titlSign={titlSign}
                {...dragHandlers}
              />
            );
          }
        )
        .reverse()}
      <Footer handleChoice={handleChoice}/>
    </View>
  );
}
