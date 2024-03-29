import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Css';
import { question } from './Questions';

export default function App() {

  const[answer,setAnswer] = useState()

  return (
    <View style={styles.average} >      
        {question.map(liste => {
          return <View>
            <Text style={styles.questions} > {liste.soru} </Text>
            <TouchableOpacity style={styles.button}><Text style={styles.text}> A)  {liste.a} </Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.text}> B)  {liste.b} </Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.text}> C)  {liste.c} </Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.text}> D)  {liste.d} </Text></TouchableOpacity>
          </View>
        } )}

  

      <StatusBar style="auto" />
    </View>
  );
}