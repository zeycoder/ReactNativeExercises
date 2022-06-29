import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native-web';

function HomeScreen( {navigation} ) {
  return (
    <View style={{ paddingTop:40 , alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24}}>Home Screen</Text>
      
      <Button title='Details page' onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
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
