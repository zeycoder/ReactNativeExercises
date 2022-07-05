import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";


const Chats = () => {
    return(
        <SafeAreaView>

            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
            />
            <View style={styles.line} />
            
            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
            />
            <View style={styles.line} />
            
            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
            />
            <View style={styles.line} />

            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
            />
            <View style={styles.line} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    line:{
        marginStart:10,
        marginEnd:10,
        height:1,
        backgroundColor:'#E8E8E8'
    }
})

export default Chats;