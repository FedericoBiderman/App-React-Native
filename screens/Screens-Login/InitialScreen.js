import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: './assets/Logo.png' }} style={styles.logo} />
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign up free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <Image source={{ uri: './assets/facebook.png' }} style={styles.socialButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: './assets/google.png' }} style={styles.socialButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: './assets/apple.png' }} style={styles.socialButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  signupButton: {
    backgroundColor: '#003366',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    borderColor: '#003366',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#003366',
    fontSize: 16,
  },
  orText: {
    marginVertical: 20,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    width: 50,
    height: 50,
  },
});