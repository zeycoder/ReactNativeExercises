import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

// Api çekme (fetch), useState ve useEffect kullanma örneğidir.
export default function App() {
  
  const [todos, setTodos] = useState([])
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: "gfjyffyj"
        })
      })
      const data = await response.json()
      console.log(data)
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
          <Text style={{fontSize:25, margin:8}} >Apiden çekilen bilgiler</Text>
          <TextInput style={styles.input} placeholder='İstediğinizi giriniz.'/>
          <Button title='Tıkla ve Listele' onPress={fetchTodos}></Button>
        </View>
        {todos.map((todo) => {
          return (
            <View style={styles.g} >
              <Text 
                key={todo.id} 
              >{todo.id} </Text>
              <Text 
                key={todo.id} 
                style={ todo.completed ?  [styles.true] : [styles.false] } 
              > -- {todo.title} .. {todo.completed ? "true" : "false" }
              </Text>
            </View>
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
  true:{
    color: 'green',
  },
  false:{
    color:'red',
  },
  g:{
    flexDirection:'row'
  },
  input:{
    alignItems:'center',
    borderWidth: 2,
    padding: 10,
    marginBottom:15,
  },
});