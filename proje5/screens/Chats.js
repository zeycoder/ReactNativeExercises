import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import ContactRow from "../components/ContactRow";
import Line from "../components/Line";

const chats=[{
    users: ['z@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z@gmail.com','za@gmail.com'],
    messages:[]
},
]

const Chats = ({navigation}) => {
    useEffect(() => {
        const isLoggedIn = false;
        if(!isLoggedIn) {
            navigation.navigate('SignUp')
        }
    }, []);

    return(
        <SafeAreaView>
            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    navigation.navigate('Chat');
                }}
            />
            <Line />
            
            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    navigation.navigate('Chat')
                }}
            />
            <Line />
            
            <ContactRow 
                name='Zeynep Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Zeynep Arslan Touched')
                }}
            />
            <Line />

            <ContactRow 
                name='Erva Arslan'
                subtitle='Hi, this is a my first message!'
                onPress={() => {
                    alert('Hi, Erva Arslan Touched')
                }}
            />
            <Line />

        </SafeAreaView>
    )
}

export default Chats;
