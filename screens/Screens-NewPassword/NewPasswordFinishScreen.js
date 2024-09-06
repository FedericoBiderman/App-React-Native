import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function NewPasswordFinishScreen() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Espera a que las fuentes se carguen
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create new password</Text>
      <Text style={styles.subtitle}>
        Your new password cannot match the ones used in the last year.
      </Text>

      <View style={styles.logoContainer}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New password"
          secureTextEntry={secureTextEntry}
          onChangeText={setNewPassword}
          value={newPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
          <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Repeat password"
          secureTextEntry={secureTextEntry}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
          <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.validationContainer}>
        <Text style={[styles.validationText, styles.successText]}>✔ At least 8 characters.</Text>
        <Text style={[styles.validationText, styles.successText]}>✔ At least one number.</Text>
        <Text style={[styles.validationText, styles.successText]}>✔ The password must contain at least one uppercase letter.</Text>
        <Text style={[styles.validationText, styles.successText]}>✔ The password must contain at least one special character.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginTop: 40,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginLeft: 8,
  },
  validationContainer: {
    width: '100%',
    marginVertical: 24,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 10,
  },
  validationText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  successText: {
    color: '#10B981',
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 25,
    height: 25,
  }
};
