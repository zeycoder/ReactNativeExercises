import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const ContactRow = ({name, subtitle, onPress, style}) => {
    return (
        <TouchableOpacity style={[styles.row, style]} onPress={onPress} >
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel} >{name.split(' ').reduce((prev,current) => `${prev[0]}${current[0]}`)}</Text>
            </View>
            <View style={styles.textsContainer} >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitle} >{subtitle}</Text>
            </View>
            <Text>Saat/tarih</Text>
        </TouchableOpacity>
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
        color:'white'
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
})

export default ContactRow;