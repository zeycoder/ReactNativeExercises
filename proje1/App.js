import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'zey', id:'1'},
    { name: 'erva', id:'2'},
    { name: 'alp', id:'3'},
    { name: 'muzo',id:'4'},
    { name: 'süho', id:'5'},
    { name: 'haso', id:'6'},
    { name: 'fero', id:'7'},
    { name: 'sudo', id:'8'}
  ])

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=> item.id }
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding:30,
    backgroundColor:'purple',
    fontSize:24,
    marginHorizontal:10,
    marginTop:20,

  },
});
