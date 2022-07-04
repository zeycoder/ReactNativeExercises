import React from "react";
import Chats from "./screens/Chats";
import { SafeAreaView, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () =>{
  return (
    <SafeAreaView>
      <Text>hi, home</Text>     
    </SafeAreaView>
    )
}
const Profile = () => {
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

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'md-person' : 'md-person-outline';
        } 
        else if (route.name === 'Chats') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tabs.Screen name="Profile" component={Profile} />
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Chats" component={Chats} />
    </Tabs.Navigator>
  )
}

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <MainStack.Screen name="Tabs" component={TabsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App;