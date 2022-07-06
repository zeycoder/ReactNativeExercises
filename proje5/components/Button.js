import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";
import { colors } from "../config/constants";

const Button = ({title, varient}) => {
    return(
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor:varient === 'primary' ? 'black': 'transparent'}]} >
            <Text style={[styles.buttonLabel,{color:varient === 'primary' ? 'white' : 'black'}]} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:colors.darkGray,
        paddingHorizontal:18,
        paddingVertical:12,
        borderRadius:4,
    },
    buttonLabel:{
        color:'white',
        fontSize:18,
    }
})

export default Button;