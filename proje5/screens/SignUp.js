import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";
import Button from "../components/Button";

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    return(
        <View style={styles.container}>
            <SafeAreaView>

                <View style={styles.contentContainer} >
                    <Text style={styles.title} > Create New Acoount</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your email" 
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your password" 
                        value={password}
                        onChangeText={text => setPassword(text)}    
                    />

                    <View style={styles.buttonsContainer} >
                        <Button 
                            title='Sign In'
                            varient='secondary'
                        />
                        <Button 
                            title='Sign Up'
                            varient='primary'
                        />
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