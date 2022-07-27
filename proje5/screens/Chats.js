import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import ContactRow from "../components/ContactRow";
import Line from "../components/Line";

const chats=[{
    users: ['z.a@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z.a@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z.a@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z.a@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z.a@gmail.com','za@gmail.com'],
    messages:[]
},{
    users: ['z.a@gmail.com','za@gmail.com'],
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
            {/* {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ContactRow 
                        name={
                            chat.users.filter(
                                x=>x !== firebase.auth().currentUser.email
                            )[0]
                        }
                        subtitle='Hi, this is a my first message!'
                        onPress={() => {
                            navigation.navigate('Chat');
                        }}
                    />
                    <Line />
                </React.Fragment>
            ))} */}
                {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ContactRow 
                        name='zeynep arslan'
                        subtitle='Hi, this is a my first message!'
                        onPress={() => {
                            navigation.navigate('Chat');
                        }}
                    />
                    <Line />
                </React.Fragment>
                ))}
        </SafeAreaView>
    )
}

export default Chats;