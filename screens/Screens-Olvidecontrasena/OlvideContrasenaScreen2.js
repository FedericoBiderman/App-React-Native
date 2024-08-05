import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OlvideContraseñaScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot my password</Text>
      <Text>Email Address</Text>
      <TextInput style={styles.input} placeholder="fefi@gmail.com" keyboardType="email-address" value="fefi@gmail.com" />
      <Button title="Send code" onPress={() => navigation.navigate('OlvideContraseñaScreen3')} />
      <Text style={styles.info}>
        This will be a code that will arrive in your email that will have 6 digits. You may want to open your "Spam" folder to find the email we will be sending you.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 },
  info: { marginTop: 10, color: '#666' },
});

export default OlvideContraseñaScreen2;
