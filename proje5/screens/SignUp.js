import React from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";

const SignUp = () => {
    return(
        <View style={styles.container}>
            <SafeAreaView>

                <View style={styles.contentContainer} >
                    <Text style={styles.title} > Create New Acoount</Text>
                    <TextInput style={styles.input} placeholder="Enter your name" />
                    <TextInput style={styles.input} placeholder="Enter your email" />
                    <TextInput style={styles.input} placeholder="Enter your password" />

                    <View style={styles.buttonsContainer} >
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonLabel}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonLabel}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flex:1
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:32,
        
    },
    buttonContainer:{
        backgroundColor:colors.darkGray,
        paddingHorizontal:18,
        paddingVertical:12,
        borderRadius:4,
    },
    buttonLabel:{
        color:'white',
        fontSize:18,
    },
    contentContainer:{
        padding:26
    },
    title:{
        fontSize:34,
        color:'white',
        fontWeight:'800',
        marginBottom:16,
        marginTop:40,
    },
    input:{
        backgroundColor:'white',
        color:'black',
        fontSize:16,
        marginTop:16,
        paddingHorizontal: 16,
        paddingVertical:12,
        borderRadius:4,

    },
    
})

export default SignUp;