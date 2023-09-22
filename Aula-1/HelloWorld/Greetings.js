import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

var data = new Date()
var horas = data.getHours()
var mensagem = ''
var styles;

if (horas >= 5 && horas < 12) {
  mensagem = 'Bom dia!'
} else if (horas >= 12 && horas < 18) {
  mensagem = 'Boa tarde!'
} else if (horas >= 18 && horas < 24 || horas >= 0 && horas < 5) {
  mensagem = 'Boa noite!'
}

export default function Greetings() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{mensagem}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

if (mensagem == 'Boa noite!') {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontFamily: 'SF Pro',
    },
  })
} else {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontFamily: 'SF Pro',
    },
  })
}