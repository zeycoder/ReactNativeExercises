import React from "react";
import Chats from "./screens/Chats";
import { SafeAreaView, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Home = ({navigation}) =>{
  return (
    <SafeAreaView>
      <Text>hi, home</Text>
      
    </SafeAreaView>
    )
}

const Profile = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text>hi, Profile</Text>
  
    </SafeAreaView>
  )
}

const Message = ()=>{
  return(
    <SafeAreaView>
      <Text>hi Message</Text>
      
    </SafeAreaView>
  )
}

const MainStack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      {/* <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Settings" component={Settings} />
      </MainStack.Navigator> */}
      <Tabs.Navigator>
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Message" component={Message} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;