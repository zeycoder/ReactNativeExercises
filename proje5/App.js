import React from "react";
import {NavigationContainer} from '@react-natigation/nat,ve'
import Chats from "./screens/Chats";
import { SafeAreaView } from "react-native";
import {createStackNavigator} from 'react-navigation/stack'

const Home = () =>{
  return (
    <SafeAreaView>
      <Text>hi, home</Text>
    </SafeAreaView>
    )
}

const Settings = () => {
  return(
    <SafeAreaView>
      <Text>hi, settings</Text>
    </SafeAreaView>
  )
}

const App = () => {
  return(
    <NavigationContainer>

    </NavigationContainer>
  )
}

export default App;