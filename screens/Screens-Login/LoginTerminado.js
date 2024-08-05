import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginTerminado = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text>Email Address</Text>
      <TextInput style={styles.input} value="fefi@gmail.com" />
      <Text>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value="********" />
      <View style={styles.row}>
        <Text>Remember me</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot my password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Log in" onPress={() => navigation.navigate('Home')} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  link: { color: 'blue' },
});

export default LoginTerminado;
