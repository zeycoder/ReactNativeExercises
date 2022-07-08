import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constants";
import Line from "../components/Line";
import Cell from "../components/Cell";

const Profile = () => {
    return(
        <View>
            <ContactRow 
                name='Zeynep Arslan'
                subtitle="z.a@gmail.com"
                style={styles.contactRow}
            />
            <Line />
            <Cell
                title='Share photo'
                icon='camera-outline'
                tintColor={colors.gray}
                onPress={()=>{
                    alert('Are you sure you want to share a photo?')
                }}
            />
            <Cell 
                title='Logout'
                icon='exit-outline'
                tintColor={colors.gray}
                onPress={()=>{
                    alert('dont touch me again')
                }}
            />
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
})

export default Profile;