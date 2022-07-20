
import { useState } from 'react';
import { StyleSheet,View, Text, Button, TextInput } from 'react-native';

//Girilen inputları apiye yollama örneğidir.
export default function App() {
  
  const [todos, setTodos] = useState([])


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='bilgi giriniz.'
      />
      <Button style={styles.button} title='Tıkla ve Gonder' ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    paddingHorizontal: 15
  },
  input:{
    alignItems:'center',
    borderWidth: 2,
    padding: 10
  },
  button:{
    paddingVertical:20,
  },
  
});