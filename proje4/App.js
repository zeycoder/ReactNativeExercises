import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen( {navigation} ) {
  return (
    <View style={{ paddingTop:40 , alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24}}>Home Screen</Text>
      <FlatList 
        data={[
          { not: '1.not', key:1, mesaj: '1.mesaj' },
          { not: '2.not', key:2, mesaj: '2.mesaj' },
          { not: '3.not', key:3, mesaj: '3.mesaj' },
          { not: '4.not', key:4, mesaj: '4.mesaj' },
          { not: '5.not', key:5, mesaj: '5.mesaj' },
          { not: '6.not', key:6, mesaj: '6.mesaj' },
          { not: '7.not', key:7, mesaj: '7.mesaj' }
        ]}
        renderItem={({item,index})=> 
        <Text style={{fontSize:24}} onPress={() => navigation.navigate('Details') } > {index+1}:{item.not} </Text>}
      />
      <Button title='Details page' onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ paddingTop:40 , alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24}} >Details Screen</Text>
      <Text></Text>
      <Button title='About page' onPress={() => navigation.navigate('About')}/>
    </View>
  );
}

function AboutScreen({navigate}){
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
