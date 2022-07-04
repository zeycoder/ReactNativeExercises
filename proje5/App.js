import React from "react";
import Chats from "./screens/Chats";
import { SafeAreaView, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({navigation}) =>{
  return (
    <SafeAreaView>
      <Text>hi, home</Text>
      <Button 
        title="go to settings screen"
        onPress={()=>{
          navigation.push('Settings')
        }}
      />
    </SafeAreaView>
    )
}

const Settings = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text>hi, settings</Text>
      <Button 
        title="go to home screen"
        onPress={() => {
          navigation.goBack('Home')
        }} />
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