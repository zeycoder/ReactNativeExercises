import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const ContactRow = () => {
    return (
        <TouchableOpacity style={styles.row}>
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel} >ZA</Text>
            </View>
            <View style={styles.textsContainer} >
                <Text style={styles.name}>Zeynep Arslan</Text>
                <Text style={styles.subtitle} >Message</Text>
            </View>
            <Text >Saat/tarih</Text>
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

export default ContactRow;