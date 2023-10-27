import React, { useState, useEffect } from 'react';
import { Text, StatusBar, SafeAreaView, Image, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';

async function fetchTime() {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Maceio');
    const data = await response.json();
    var hora = String(data.datetime).slice(11, 19)
    return hora
  } catch (error) {
    console.error(error);
  }
}

const hora = await fetchTime();

let timer = null
let segundos = parseInt(hora.split(':')[2])
let minutos = parseInt(hora.split(':')[1])
let horas = parseInt(hora.split(':')[0])
let segundosF;
let minutosF;
let horasF;

export default function App() {
  const [numero, setNumero] = useState("00:00:00")
  const [area, setArea] = useState('Maceió')
  const [timezone, setTimezone] = useState(-3)

  function changeArea(newTz) {
    if (newTz != timezone) {
      var result = newTz - timezone
      setTimezone(newTz)
      horas = horas + result

      if (horas >= 24) {
        horas = horas - 24
      } else if (horas < 0) {
        horas = horas + 24
      }

      if (horas < 10) {
        horasF = `0${horas}`
      } else {
        horasF = horas
      }

      let formatado = `${horasF}:${minutosF}:${segundosF}`
      setNumero(formatado)
    }
  }

  useEffect(() => {
    timer = setInterval(() => {
      segundos++

      if (segundos == 60) {
        segundos = 0
        minutos++
      }

      if (minutos == 60) {
        minutos = 0
        horas++
      }

      if (horas == 24) {
        horas = 0
      }

      if (horas < 10) {
        horasF = `0${horas}`
      } else {
        horasF = horas
      }

      if (minutos < 10) {
        minutosF = `0${minutos}`
      } else {
        minutosF = minutos
      }

      if (segundos < 10) {
        segundosF = `0${segundos}`
      } else {
        segundosF = segundos
      }

      let formatado = `${horasF}:${minutosF}:${segundosF}`
      setNumero(formatado)
    }, 1000)

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={{color: '#fff'}}>Relógio Mundial: {area}</Text>
      <Image source={require('./assets/crono.png')} />
      <Text style={styles.texto}>{numero}</Text>

      <View style={styles.btnArea}>
        <Pressable style={styles.btn} onPress={() => changeArea(-3)}>
          <Text style={styles.btnText}>
            Maceió
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => changeArea(2)}>
          <Text style={styles.btnText}>
            Barcelona
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => changeArea(9)}>
          <Text style={styles.btnText}>
            Tóquio
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 0.8,
    margin: 2,
    padding: 10,
    fontSize: 15

  },
  view: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -150

  },
  direction: {
    flexDirection: 'row'
  },
  btnArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    marginTop: 50,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    paddingHorizontal: 100,
    borderRadius: 9,
    margin: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 50,
    marginBottom: -50,
    fontWeight: 'bold',
    color: '#fff',
  },
  historico: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});