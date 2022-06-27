import React from "react";
import { StyleSheet, Text, View, } from "react-native";

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
            <Text style={styles.boxFive}>five</Text>
            <Text style={styles.boxSix}>six</Text>
            <Text style={styles.boxSeven}>seven</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        //alignItems:'center',
        paddingTop: 40,
        backgroundColor:'#ddd'  
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        backgroundColor:'gold',
        padding:20,
    },
    boxThree:{
        backgroundColor:'pink',
        padding:10,
    },
    boxFour:{
        backgroundColor:'skyblue',
        padding:20,
    },
    boxFive:{
        backgroundColor:'orange',
        padding:10,
    },
    boxSix:{
        backgroundColor:'yellow',
        padding:20,
    },
    boxSeven:{
        backgroundColor:'gray',
        padding:10,
    }
});