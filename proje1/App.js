import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'zey', id:'1'},
    { name: 'erva', id:'2'},
    { name: 'zey', id:'3'},
    { name: 'erva', id:'4'},
    { name: 'zey', id:'5'},
    { name: 'erva', id:'6'},
    { name: 'zey', id:'7'},
    { name: 'erva', id:'8'},
    { name: 'zey', id:'9'},
    { name: 'erva', id:'10'},
    { name: 'zey', id:'11'},
    { name: 'erva', id:'12'},
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=> item.id }
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
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
