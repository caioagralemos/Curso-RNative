import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState(0);
  const [soma, setSoma] = useState(0)

  function somaNumero() {
    setSoma(soma+numero)
    setNumero('')
  }

  function subtraiNumero() {
    setSoma(soma-numero)
    setNumero('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <TextInput
        value={numero}
        style={styles.input}
        placeholder={"Diz um numero pai"}
        onChangeText={(texto) => (setNumero(parseInt(texto)))}
      />

      <View style={{ flexDirection: 'row', alignItems: "center" }}>
      <Button
        title='Somar'
        onPress={somaNumero}
      />
      <Text style={{ fontSize: 20 }}>{soma}</Text>
      <Button
        title='Subtrair'
        onPress={subtraiNumero}
      />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, input: {
    height: 40,
    width: '80%',
    borderWidth: 0.8,
    margin: 2,
    padding: 10,
    fontSize: 15
  }
});
