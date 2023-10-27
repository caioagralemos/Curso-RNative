import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function fortune() {
  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const [mensagem, setMensagem] = useState('')
  const [flag, setFlag] = useState(null)

  const mensagens = [
    "Acredite em si mesmo e tudo será possível.",
    "Seja a mudança que você deseja ver no mundo.",
    "O sucesso nasce do desejo, determinação e persistência.",
    "A jornada de mil milhas começa com um único passo.",
    "Tenha coragem e seja gentil.",
    "Nada é impossível para aquele que persiste.",
    "Seja a melhor versão de si mesmo.",
    "A sorte favorece os audazes.",
    "Sonhe grande e trabalhe duro para alcançar seus sonhos.",
    "Acredite em milagres, mas não dependa deles.",
    "A paciência é amarga, mas seus frutos são doces.",
    "Você é capaz de fazer coisas incríveis.",
    "Cada dia é uma nova oportunidade para brilhar.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Siga seus sonhos, eles conhecem o caminho.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Apenas faça, não espere.",
    "A vida é curta, sorria enquanto ainda tem dentes.",
    "O futuro depende do que você faz hoje.",
    "O tempo é ouro, então gaste-o com sabedoria.",
    "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    "A única maneira de fazer um grande trabalho é amar o que você faz.",
    "O primeiro passo para o sucesso é acreditar que você pode.",
    "A perseverança é a chave para o sucesso.",
    "A mente é tudo. O que você pensa, você se torna.",
    "Se você nunca tentar, nunca saberá.",
    "A coragem não é a ausência do medo, mas a conquista dele.",
    "Amar é dar alguém a capacidade de destruir você, mas confiando que ela não o fará.",
    "Não se preocupe com os obstáculos no caminho, você pode passar por cima deles.",
    "Você é mais forte do que pensa.",
  ];

  function novaFrase() {
    var num = Math.floor(Math.random() * mensagens.length)
    while (flag != null && num == flag) {
      num = Math.floor(Math.random() * mensagens.length)
    }
    setFlag(num)
    setMensagem(mensagens[num])
  }

  function quebraBiscoito() {
    setImg(require('./assets/biscoitoAberto.png'))
    novaFrase()
  }

  function resetarBiscoito() {
    setImg(require('./assets/biscoito.png'))
    setMensagem('')
  }

 return (
   <SafeAreaView style={styles.container}>
      <Image 
        source={img}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        {mensagem != '' ? `"${mensagem}"`: null}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={mensagem == '' ? quebraBiscoito : resetarBiscoito}>
        <Text>
          {mensagem == '' ? 'Quebrar Biscoito' : 'Resetar'}
        </Text>
      </TouchableOpacity>

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
  imagem: {
    width: 300,
    height: 300
  },
  texto: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#dd7b22',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '80%',
    height: '7%',
    borderRadius: 22,
    margin: 10,
    color: '#dd7b22',
  },
})