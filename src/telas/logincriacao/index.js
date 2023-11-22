import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function logincriacao(){
  const [size, setSize] = useState(10)


  return(
    <View style={styles.container}>
      <Text style={styles.title2}>Bem vindo ao PapelVirtual</Text>
      <Image
      source={require("../../assets/logo2.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>Faça anotações, Capture rapidamente o que está em sua mente.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>LOG IN</Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#F1F1F1",
      justifyContent: 'center',
      alignItems: 'center'
    },
  logo:{
    marginBottom: 60
  },
  button:{
    backgroundColor: "#5798DC",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 18,
  },
  button2:{
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 18,
  },
  buttonText2:{
    color: "#5798DC",
    fontSize: 18,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    height: 90,
    width: "90%",
  },
  title2:{
    fontSize: 18,
    fontWeight: 'bold',
    height: 50,
    width: "90%",
  }
})