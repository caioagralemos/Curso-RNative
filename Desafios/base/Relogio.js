import React, { useState } from 'react';
import { Text, StatusBar, SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

let timer = null
let segundos = 0
let minutos = 0
let horas = 0

export default function Cronometro() {
  fetch('http://worldtimeapi.org/api/timezone/America/Maceio').then(res => {
    console.log('Resolved!', res)
  })
  const [numero, setNumero] = useState("00:00:00")
  const [botao, setBotao] = useState('Iniciar')
  const [ultimo, setUltimo] = useState(null)

  function iniciar() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null;
      setBotao('Iniciar')
    } else {
      setBotao('Parar')
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

        if (horas < 10) {
          horasF = `0${horas}`
        }
        if (minutos < 10) {
          minutosF = `0${minutos}`
        }
        if (segundos < 10) {
          segundosF = `0${segundos}`
        }

        let formatado = `${horasF}:${minutosF}:${segundosF}`
        setNumero(formatado)
      }, 1000)
    }
  }

  function zerar() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
      setBotao('Iniciar')
    }
    setUltimo(numero)
    setNumero("00:00:00")
    horas = 0
    minutos = 0
    segundos = 0
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={require('./assets/crono.png')} />
      <Text style={styles.texto}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>
            {botao}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnText}>
            Zerar
          </Text>
        </TouchableOpacity>
      </View>
      {ultimo ? <Text style={styles.historico}>Último tempo: {ultimo}</Text> : null}
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
  direcion: {
    flexDirection: 'row'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 162,
    height: 40,
    justifyContent: 'space-around',
    width: '100%',

  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    width: '40%',
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 50,
    marginBottom: -50,
    fontWeight: 'bold',
  },
  historico: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});