import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';


Sound.setCategory('Playback')

var um = new Sound('./assets/um.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
}})

var dois = new Sound('./assets/dois.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
}})

const [currentSound, setCurrentSound] = useState('um')

const hinoDoGigante = () => {
  um.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
}

export default function Vasco() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: "bold", fontSize: 30, color: "#fff"}}>
        O SUPER VASCO
      </Text>
      <View onTouchStart={hinoDoGigante}>
        <Image source={{
            uri: 'https://vasco.com.br/wp-content/uploads/2020/10/ESCUDO-VASCO-RGB-1-450x450.png'
          }} style={{width: 450, height: 450}} alt='Vasco'/>
        {/* ou source={require('./assets/favicon.png')} para imagens locais */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
