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
                title='Logout'
                icon='exit-outline'
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