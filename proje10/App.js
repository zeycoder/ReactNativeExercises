import React from "react";
import { Text } from "react-native";

const allName = (firstName, lastName) => {
  return firstName+ ' ' +lastName
}

const Me =() => {
  return <Text> Selam benim adım {allName('Zeynep','Arslan')} :) !</Text>
}

export default Me;