import React, {useState} from "react";
import { Text , View , TextInput, Button, ScrollView } from "react-native";
import styles from "./src/Css";

const allName = (firstName, lastName) => {
  return firstName+ ' ' +lastName
}

const Cat = (props) => {

  const [isHungry, setIsHungry] = useState(true)

  return(
    <View style={{marginBottom:20}} >
      <Text> Meow, ben {props.cat} ve { isHungry ? 'açım' : 'doydum :)' }  </Text>
      <Button 
        onPress={() => {
          setIsHungry(false)
        }}
        disabled={!isHungry}
        title={isHungry ? 'Al bakalım sana yemek' : 'Teşekkürler :)' }
      />
    </View>
  )
}

const People = (props) => {
  return(
    <View>
      <Text>Hi, i'm {props.name}</Text>
    </View>
  )
}

const Scroll = () => {
  return(
    <ScrollView>
      <Text style={{fontSize:200}} >Merhaba ben zeynep</Text>
    </ScrollView>
  )
}

const Me =() => {
  const [text, setText] = useState(' ')
  return (
    <View style={styles.container}>
      <People name='ıııı' />
      <People name='Zey' />
      <Text  > Selam ! Benim adım {allName('Zeynep','Arslan')}. Senin adın ne ? :) </Text>
      <TextInput style={styles.textInput} placeholder="pizzaaa..." onChangeText={newText => setText(newText)} defaultValue={text} ></TextInput>
      <Text > {text.split(' ').map((word)=>word&&'🍕').join(' ')} </Text>
      <Cat cat='miyuv' />
      <Scroll/>
    </View>
  )
}

export default Me;