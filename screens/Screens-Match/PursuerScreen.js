import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function MatcheoScreen() {
  return (
    <View style={styles.container}>
      
      {/* Encabezado con logo e íconos */}
      <View style={styles.header}>
        <Image source={{ uri: './assets/Logo.png' }} style={styles.logo} />
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="settings" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta de perfil */}
      <View style={styles.cardContainer}>
        <Image source={{ uri: './assets/pursuer1.png' }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>Alicia, 25</Text>
          <Text style={styles.details}>Recently Active</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={18} color="gold" />
            <FontAwesome name="star" size={18} color="gold" />
            <FontAwesome name="star" size={18} color="gold" />
            <FontAwesome name="star" size={18} color="gold" />
            <FontAwesome name="star-half" size={18} color="gold" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text style={styles.matched}>Matched +5 Preferences</Text>
          <Text style={styles.preference}>UBA</Text>
          <Text style={styles.preference}>Ingles</Text>
          <Text style={styles.preference}>Programmer</Text>
          <Text style={styles.preference}>Full-Stack</Text>
          <Text style={styles.preference}>Titulo de Grado</Text>
          <Text style={styles.preference}>Argentina</Text>
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="times" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="check" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="star" size={24} color="purple" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="arrow-right" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
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
  preference: {
    fontSize: 14,
    color: '#555',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});