import React from "react";
import { SafeAreaView, ScrollView} from "react-native";
import Post from "../components/Post";

const Home = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <Post 
                    name='Zeynep Arslan'
                    onPress={() => {
                        alert('Hi, Zeynep Arslan Touched')
                    }}
                />
                <Post 
                    name='Erva Arslan'
                    onPress={() => {
                        alert('Hi, Erva Arslan Touched')
                    }}
                />   
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;