import React from "react";
import { Text , View } from "react-native";
import styles from "./src/Css";

const allName = (firstName, lastName) => {
  return firstName+ ' ' +lastName
}

const Me =() => {
  return (
    <View style={styles.container}>
      <Text  > Selam benim adım {allName('Zeynep','Arslan')}. Memnun oldums :) !</Text>
    </View>
  )
}

export default Me;