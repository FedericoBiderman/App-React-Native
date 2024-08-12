import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({ name, size, color, style, onPress }) => {
    const scale = useRef(new Animated.Value(1)).current;
    
    const animateScale = useCallback((newValue) => {
        Animated.spring(scale, {
            toValue: newValue,
            friction: 4, // Corrección de 'triction' a 'friction'
            useNativeDriver: true
        }).start();
    }, [scale]);

    return (
        <TouchableWithoutFeedback
            onPressIn={() => animateScale(0.6)}
            onPressOut={() => {
                animateScale(1);
                if (onPress) onPress(); // Verifica si onPress es una función antes de llamarla
            }}
            delayPressIn={0}
            delayPressOut={100}
        >
            <Animated.View
                style={[
                    {
                        height: 60,
                        width: 60,
                        backgroundColor: 'white',
                        elevation: 5,
                        borderRadius: 30, // Ajusta el borderRadius para que sea la mitad de la altura/ancho
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: color,
                        borderWidth: 1.2,
                        transform: [{ scale }],
                    },
                    style // Aplica el estilo adicional aquí
                ]}
            >
                <FontAwesome name={name} size={size} color={color} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Button;
