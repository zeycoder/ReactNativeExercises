import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config/constants";
import {Ionicons} from '@expo/vector-icons';


const Cell = ({title, icon, tintColor, onPress}) => {
    return(
        <TouchableOpacity 
                style={styles.cell}
                onPress={onPress}>
                <View style={[styles.iconContainer, {
        backgroundColor:tintColor  }]}>
                    <Ionicons
                        name={icon}
                        size={26} 
                        color={'white'} 
                    />
                </View>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor:colors.border,
    },
    title:{
        fontSize:16,
        marginStart:16
    },
    iconContainer:{
        width:32,
        height:32,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    },
})

export default Cell;