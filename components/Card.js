import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { Fragment, useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de tener esta librería instalada
import Choice from './Choice';

const { width, height } = Dimensions.get('screen');

const Card = ({ name, EducationalInstitutions, Job, Sub_Job, EducationalStatus, Languagues, Country, age, image, isFirst, swipe, titlSign, ...rest }) => {

    const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ["8deg", "0deg", "-8deg"]
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), {rotate}]
    }

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, 100],
        outputRange: [0,1],
        extrapolate: "clamp"
    })

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-100, -25],
        outputRange: [1,0],
        extrapolate: "clamp"
    })
    const renderChoice = useCallback(() => {
        return (
            <Fragment>
                <Animated.View
                    style={[styles.choiceContainer, styles.likeContainer, {opacity: likeOpacity}]}
                >
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[styles.choiceContainer, styles.nopeContainer, {opacity: nopeOpacity}]}
                >
                    <Choice type="nope" />
                </Animated.View>
            </Fragment>

        )
    }, [likeOpacity, nopeOpacity])
    return (
        <Animated.View style={[
            styles.container,
            isFirst && animatedCardStyle
            ]} {...rest}>
            <Image source={image} style={styles.image} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,.9)']}
                style={styles.gradient}
            >
                <View style={styles.userContainer}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{name}, {age}</Text>
                        <Text style={styles.details}>Recently Active</Text>
                        <View style={styles.rating}>
                            <FontAwesome name="star" size={18} color="gold" />
                            <FontAwesome name="star" size={18} color="gold" />
                            <FontAwesome name="star" size={18} color="gold" />
                            <FontAwesome name="star" size={18} color="gold" />
                            <FontAwesome name="star-half" size={18} color="gold" />
                            <Text style={styles.ratingText}>4.5</Text>
                        </View>
                        <Text style={styles.matched}>{matched}</Text>
                        <Text style={styles.EducationalInstitutions}>{EducationalInstitutions}</Text>
                        <Text style={styles.Languagues}>{Languagues}</Text>
                        <Text style={styles.Job}>{Job}</Text>
                        <Text style={styles.Sub_Job}>{Sub_Job}</Text>
                        <Text style={styles.EducationalStatus}>{EducationalStatus}</Text>
                        <Text style={styles.Country}>{Country}</Text>
                    </View>
                </View>
            </LinearGradient>
            {isFirst && renderChoice()}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    image: {
        width: width * 0.9,
        height: height * 0.78,
        borderRadius: 20,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    userContainer: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },
    info: {
        padding: 10,
    },
    details: {
        color: 'green',
        fontSize: 16,
        marginVertical: 5,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 16,
    },
    matched: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
    },
    EducationalInstitutions: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    Languagues: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    Job: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    Sub_Job: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    EducationalStatus: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    Country: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
    },
    choiceContainer: {
        position: "absolute",
        top: 100
    },
    likeContainer: {
        left: 45,
        transform: [{ rotate: "-30deg" }]
    },
    nopeContainer: {
        left: 45,
        transform: [{ rotate: "30deg" }]
    }
});

export default Card;
