import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";
import {Ionicons} from '@expo/vector-icons'
import { colors } from "../config/constants";


const Chats = () => {
    return(
        <SafeAreaView>

            <ContactRow />
            <View style={styles.line} />
            
            <ContactRow />
            <View style={styles.line} />
            
            <ContactRow />
            <View style={styles.line} />

            <ContactRow />
            <View style={styles.line} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop:40,
    },
    textsContainer:{
        flex:1,
    },
    avatar:{
        width:50,
        height:50,
        backgroundColor: colors.primary,
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center',
        marginRight:12
    },
    avatarLabel:{
        fontSize: 20,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:20
    },
    name:{
        fontSize:16
    },
    subtitle:{
        marginTop:2,
        color:'#565656'
    },
    line:{
        marginStart:10,
        marginEnd:10,
        height:1,
        backgroundColor:'#E8E8E8'
    }
})

export default Chats;