import React from "react";
import Chats from "./screens/Chats";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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

const MainStack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Settings" component={Settings} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App;