import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";


const Chats = () => {
    return(
        <SafeAreaView>
            <TouchableOpacity>
                <Text style={{paddingTop:40}}>Hi, Chats Screen!</Text>
                <Text>Message</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}



export default Chats;