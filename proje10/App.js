import React from "react";
import { Text , View , TextInput } from "react-native";
import styles from "./src/Css";

const allName = (firstName, lastName) => {
  return firstName+ ' ' +lastName
}

const Me =() => {
  return (
    <View style={styles.container}>
      <Text  > Selam ! Benim adım {allName('Zeynep','Arslan')}. Senin adın ne ? :) </Text>
      <TextInput style={styles.textInput} placeholder="Benim adım ..."></TextInput>
    </View>
  )
}

export default Me;