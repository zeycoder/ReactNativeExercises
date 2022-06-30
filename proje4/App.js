//import * as React from 'react';
import React, { useState } from 'react';
import { View, Text, Button, FlatList, RefreshControl, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const veri = [
  { not: '1.not', key:1, mesaj: '1.mesaj' },
  { not: '2.not', key:2, mesaj: '2.mesaj' },
  { not: '3.not', key:3, mesaj: '3.mesaj' },
  { not: '4.not', key:4, mesaj: '4.mesaj' },
  { not: '5.not', key:5, mesaj: '5.mesaj' },
  { not: '6.not', key:6, mesaj: '6.mesaj' },
  { not: '7.not', key:7, mesaj: '7.mesaj' },
  { not: '8.not', key:8, mesaj: '8.mesaj' },
  { not: '9.not', key:9, mesaj: '9.mesaj' },
  { not: '10.not', key:10, mesaj: '10.mesaj' },
  { not: '11.not', key:11, mesaj: '11.mesaj' },
  { not: '12.not', key:12, mesaj: '12.mesaj' },
]

function HomeScreen( {navigation} ) {
  const [refreshing, setRefreshing] = useState(false)
  const onRefreshing = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1500);
  }
  return (
    <View style={{ paddingTop:40 , alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 34, color:'red' }}>Home Screen</Text>
      <FlatList 
        data={veri}
        renderItem={({item,index})=> 
        <Text style={{fontSize:30}} onPress={() => navigation.navigate('Details', {...item}) } > {index+1}:{item.not} </Text>}
        keyExtractor={item=>item.key}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />}

      />
      <Button title='Details page' onPress={() => { navigation.navigate('Details');
      }} />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  
  return (
    <View style={{ paddingTop:40 , alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24}} >Details Screen</Text>
        <Text>{JSON.stringify(mesaj)}  </Text> 
      <Button title='About page' onPress={() => navigation.navigate('About')}/>
    </View>
  );
}

function AboutScreen(){
  return(
    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
      <Text>About Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{title: 'Anasayfa'}} component={HomeScreen} />
        <Stack.Screen name="Details" options={{title: 'Detaylar'}} component={DetailsScreen} />
        <Stack.Screen name='About' options={{title: 'Hakkında'}} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;