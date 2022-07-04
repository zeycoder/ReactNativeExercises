import React from "react";
import Chats from "./screens/Chats";
import { SafeAreaView, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Tabs.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            if (route.name === 'Message') {
              iconName = focused
                ? 'chatbubbles'
                : 'chatbubbles-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            
            if (route.name === 'Profile') {
              iconName = focused
                ? 'md-person'
                : 'md-person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Message" component={Message} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;