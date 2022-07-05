import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";
import Post from "../components/Post";

const Home = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <Post 
                    name='Zeynep Arslan'
                    onPress={() => {
                        alert('Hi, Zeynep Arslan Touched')
                    }}
                />
                <Post 
                    name='Erva Arslan'
                    onPress={() => {
                        alert('Hi, Erva Arslan Touched')
                    }}
                />   
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;