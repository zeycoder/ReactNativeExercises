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
          { not: '1.not' },
          { not: '2.not' },
          { not: '3.not' },
          { not: '4.not' },
          { not: '5.not' },
          { not: '6.not' },
          { not: '7.not' }
        ]}
        renderItem={({item,index})=> <Text> {index+1}:{item.not} </Text>}
      />
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
