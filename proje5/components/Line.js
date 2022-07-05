import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../config/constants";

const Line = () => {
    return(
        <View style={styles.line} />
    )
}

const styles = StyleSheet.create({
    
    line:{
        marginStart:10,
        marginEnd:10,
        height:1,
        backgroundColor:colors.border,
    }
})

export default Line;