import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';

// Api çekme (fetch), useState ve useEffect kullanma örneğidir.
export default function App() {

  const [todos, setTodos] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function getTodos(){
      const cevap = await fetch('https://jsonplaceholder.typicode.com/todos')
      const veri = await cevap.json()
      setTodos(veri)
    }
    if(submit){
      getTodos();
    }
  },[submit])
  function goster() {
    setSubmit(true)
  }  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button style={styles.button} title='Tıkla' onPress={goster}></Button>
        {todos.map((todo) => {
          return <Text key={todo.id}>{todo.title}</Text>
        })}
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    paddingTop: 50,
  },
  button:{
    height: '100%',
    justifyContent: 'center',
  },
  text:{
    fontSize:18,
    color :'red',
  }
});