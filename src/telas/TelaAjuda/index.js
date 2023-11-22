import {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function TelaAjuda(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ajuda</Text>
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text:{
            fontSize: 25,
            fontWeight: 'bold'
        }
    });