import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState('0');
  const [resultado, setResultado] = useState(0)
  const [operacao, setOperacao] = useState('+')

  function calc() {
    if (operacao == "+") {
      setResultado(parseInt(numero1) + parseInt(numero2))
    } else if (operacao == '-') {
      setResultado(parseInt(numero1) - parseInt(numero2))
    } else if (operacao == '*') {
      setResultado(parseInt(numero1) * parseInt(numero2))
    } else if (operacao == '/') {
      setResultado(parseInt(numero1) / parseInt(numero2))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Calculadora</Text>

      <SafeAreaView style={styles.row}>
        <TextInput
          value={numero1}
          style={styles.input}
          onChangeText={(texto) => (setNumero1(texto))}
          keyboardType='numeric'
        />
        <Text style={styles.btn}>{operacao}</Text>
        <TextInput
          value={numero2}
          style={styles.input}
          onChangeText={(texto) => (setNumero2(texto))}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.btn} onPress={calc}>=</TouchableOpacity>
      </SafeAreaView>
      
      <SafeAreaView style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => setOperacao('+')}>+</TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setOperacao('-')}>-</TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setOperacao('*')}>*</TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setOperacao('/')}>/</TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <Text style={styles.resultado}>
          {resultado}
        </Text>
      </SafeAreaView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '10%',
    borderWidth: 0.8,
    margin: 2,
    padding: 10,
    fontSize: 15
  }, 
  btn: { 
    borderStyle: 'solid', 
    borderColor: 'black', 
    borderWidth: 0.8, 
    padding: 10 
  },
  resultado: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderStyle: 'solid', 
    borderColor: 'black', 
    borderWidth: 0.8, 
    margin: 10,
  }
});