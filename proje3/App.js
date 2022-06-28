import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Home from './screens/home';
import About from './screens/about';
import Navigator from './routes/homeStack'; 

export default function App() {
  return (
    <Navigator />    
  );
}
