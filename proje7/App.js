import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet,View, Text, Button, ScrollView } from 'react-native';

export default function App() {
  
  const [todos, setTodos] = useState([])
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      console.log(data)
      setTodos(data)
    }
    if(submit){
      getTodos()
    }
  },[submit])
  function fetchTodos(){
    setSubmit(true)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.safearea} >
          <Button title='Tıkla' onPress={fetchTodos}></Button>
        </View>
        {todos.map((todo) => {
          return (
            <Text key={todo.id}> {todo.id} -- {todo.title} .. {todo.completed ? "true" ||"pwldkodl" : "false" }</Text>
          )
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
    margin: 15,
  },
  safearea:{
    marginTop:20,
    padding:50,
  },
});
