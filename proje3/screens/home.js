import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }){

    const [reviews, setReviews] = useState([
        { title: 'Not 1, unutmamam gerekenler', rating:5, body:'unutma sakın', key:'1'},
        { title: 'Not 2, bazı özel tarihler', rating:4, body:'4 nisan 2001', key:'2'},
        { title:'Not 3, yapmam gerekenler', ranting:3, body:'bunları yapmalısın', key:'3'}
    ]);

    // const pressHandler = () =>{
    //     navigation.navigate('ReviewDetails')
    //     //navigation.push('ReviewDetails');
    // }

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />           
        </View>
    );
}
