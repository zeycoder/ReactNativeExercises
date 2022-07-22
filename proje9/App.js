import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './Css';
import { question } from './Questions';

export default function App() {
  return (
    <View style={styles.average} >
      {question.map(liste => <Text> SORU: {liste.soru} </Text>)} 

      <StatusBar style="auto" />
    </View>
  );
}