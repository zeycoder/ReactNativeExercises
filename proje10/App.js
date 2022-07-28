import React, {useState} from "react";
import { Text , View , TextInput, Button, ScrollView, FlatList } from "react-native";
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
      <Text style={{ fontSize:120}} >Merhaba ben zeynep</Text>
    </ScrollView>
  )
}

const List = () => {
  return(
    <FlatList
      style={{marginVertical:40}}
      data={[
        {key:'zeynep'},
        {key:'erva'},
        {key:'muzo'},
        {key:'zeynep'},
        {key:'erva'},
        {key:'zeynep'},
        {key:'erva'},
        {key:'zeynep'},
        {key:'erva'},
      ]}
      renderItem={({item}) => <Text>{item.key} </Text> }
    />
  )
}

const Style = () => {
	return(
    <View>
		  <View style={{width:50, height:50, backgroundColor:'purple'}} />
		  <View style={{width:100, height:100, backgroundColor:'red'}} />
		  <View style={{width:150, height:150, backgroundColor:'yellow'}} />
    </View>
	)
}

const Me =() => {
  const [text, setText] = useState(' ')
  return (
    <ScrollView style={styles.container}>
      <People name='ıııı' />
      <People name='Zey' />
      <Text  > Selam ! Benim adım {allName('Zeynep','Arslan')}. Senin adın ne ? :) </Text>
      <TextInput style={styles.textInput} placeholder="pizzaaa..." onChangeText={newText => setText(newText)} defaultValue={text} ></TextInput>
      <Text > {text.split(' ').map((word)=>word&&'🍕').join(' ')} </Text>
      <Cat cat='miyuv' />
      <Scroll />
      <List />
      <Style />

    </ScrollView>
  )
}

export default Me;