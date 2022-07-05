import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constants";
import Line from "../components/Line";
import {Ionicons} from '@expo/vector-icons';

const Profile = () => {
    return(
        <View>
            <ContactRow 
                name='Zeynep Arslan'
                subtitle="z.a@gmail.com"
                style={styles.contactRow}
            />
            <Line />
            <TouchableOpacity 
                style={styles.cell}
                onPress={() => {
                    alert('Hi, You Touched Me !')
                }}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="exit-outline"
                        size={26} 
                        color={'white'} 
                    />
                </View>
                <Text style={styles.title} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contactRow:{
        backgroundColor: 'white',
        marginTop:16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor:colors.border,
    },
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        fontSize:16,
        marginStart:16
    },
    iconContainer:{
        width:32,
        height:32,
        backgroundColor:colors.red,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
    },
})

export default Profile;