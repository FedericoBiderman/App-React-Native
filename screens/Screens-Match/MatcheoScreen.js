import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MatcheoScreen = () => {
  return (
    <ImageBackground source={{ uri: './assets/pursuer4.png' }} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.matchText}>It's a Match!</Text>
        <Text style={styles.subText}>Es un match!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Dile algo"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="smile-o" size={24} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="star-o" size={24} color="gold" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="thumbs-up" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
  },
  matchText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'mintcream',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: 'mintcream',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  iconButton: {
    padding: 10,
  },
});

export default MatcheoScreen;
