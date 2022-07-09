import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { colors } from "../config/constants";

const Post = ({name, onPress}) => {
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.row} onPress={onPress} >
                <View style={styles.avatar} >
                    <Text style={styles.avatarLabel}>{name.split(' ').reduce((prev,current) => `${prev[0]}${current[0]}`)}</Text>
                </View>
                <Text style={styles.name}> {name}</Text>
            </TouchableOpacity>
            <View style={styles.post} />
            <View style={styles.space} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    post:{
        width:'100%',
        height:400,
        backgroundColor:colors.primary,
        
    },
    avatar:{
        width:38,
        height:38,
        backgroundColor: colors.primary,
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center',
        marginRight:12
    },
    avatarLabel:{
        fontSize:18,
        color:'white',
    },
    name:{
        fontSize:16,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10
    },
    space:{
        width:'100%',
        height:40,
    },
})

export default Post;