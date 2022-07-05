import React from "react";
import { View, StyleSheet } from "react-native";

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
        backgroundColor:'#E8E8E8'
    }
})

export default Line;