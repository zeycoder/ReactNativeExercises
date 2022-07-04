import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";

const Home = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.avatar} />
                        <Text style={styles.avatarLaber}>Zeynep Arslan</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.post} />

                <View style={styles.space} />

                <TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.avatar} />
                        <Text style={styles.avatarLaber}>Zeynep Arslan</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.post} />

                <View style={styles.space} />

                <TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.avatar} />
                        <Text style={styles.avatarLaber}>Zeynep Arslan</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.post} />
            </ScrollView>
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
    avatarLaber:{
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


export default Home;