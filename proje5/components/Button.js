import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";
import { colors } from "../config/constants";

const Button = ({title, varient}) => {

    // const [name,setName] = useState('')
    // const [email,setEmail]= useState('')
    // const [password,setPassword] = useState('')


    // const handleSignUp = () => {
    //     auth
    //     .createUserWithNameAndEmailAndPassword(name,email,password)
    //     .then(userCreadentials =>{
    //         const user = userCredentials.user;
    //         console.log(user.name)
    //     })
    //     .catch(error => alert (error.message))
    // }

    return(
        <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor:varient === 'primary' ? 'black': 'transparent'}]} 
            //onPress={handleSignUp}
        >
            <Text 
                style={[styles.buttonLabel,{color:varient === 'primary' ? 'white' : 'black'}]} 
            >{title}</Text>
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