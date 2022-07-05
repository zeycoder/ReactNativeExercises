import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";
import Line from "../components/Line";


const Chats = () => {
    return(
        <SafeAreaView>

            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Zeynep Arslan Touched')
                }}
            />
            <Line />
            
            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Erva Arslan Touched')
                }}
            />
            <Line />
            
            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Zeynep Arslan Touched')
                }}
            />
            <Line />

            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Erva Arslan Touched')
                }}
            />
            <Line />

        </SafeAreaView>
    )
}

export default Chats;