import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              accessibilityLabel="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{ uri: 'https://example.com/logo.png' }} // Usa una URL válida aquí
            />
            <Text style={styles.title}>
              Sign in to <Text style={styles.highlight}>LaburAR</Text>
            </Text>
            <Text style={styles.subtitle}>Welcome Back</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="**"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry
                value={form.password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.formLink}>Forgot password?</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
            style={styles.footerLink}
          >
            <Text style={styles.formFooter}>
              You are new?{' '}
              <Text style={styles.createAccountLink}>Create an account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  highlight: {
    color: '#075eec',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  footerLink: {
    marginTop: 'auto',
  },
  createAccountLink: {
    textDecorationLine: 'underline',
  },
});

export default App;



 //App.js del filtro de Tinder
 /*
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {users as usersArray} from './utils/data.js';
import Card from './components/Card.js';
import Footer from './components/Footer.js';
export default function App() {
  const [users, setUsers] = useState(usersArray);

  useEffect(()=>{
    if(!users.length){
      setUsers(users);
    }
  },[users.length])
  return(
    <View style={{flex: 1, alignItems: "center", backgroundColor: "white"}}>
      <StatusBar hidden={true} />
      {
        users.map(({name, image, location, distance, age}, index)=>{
          const isFirst = index == 0;
          return (
            <Card
            key={name}
            name={name}
            location={location}
            distance={distance}
            age={age}
            image={image}
            isFirst={isFirst}
            />
          )
        }).reverse()
      }
      <Footer/>
    </View>
  )
};
*/