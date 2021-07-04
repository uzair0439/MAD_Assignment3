import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];



export default function App() {

  const [Itemname, setItem] = useState("");
  const [DataList, setList] = useState([
    {
      id:1,
      title: 'First Item',
    },
  ]);

  const add = () => {
    if (Itemname === '') {
      alert("Please add an item name");
    }

    else {
      var obj = {};
      var count = DataList.length+1;
      obj = { 
        'id':count,
        'title': Itemname }
      setList(DataList => [...DataList, obj]);
      console.log(DATA)
      alert(obj.title)
    }
  }

  const rightSwipe=()=>{
     alert("Helloooooo")
  }

  const deleteItem=(index)=>{

  }

  const Item = ({ itemss }) => (
    <Swipeable onSwipeableRightOpen={rightSwipe} >
    <View style={styles.item}>
      <Text style={styles.title}>{itemss.title}</Text>
    </View>
    </Swipeable>
  );

  const renderItem = ({ item,index }) => (
    <Item itemss={item} handleDelete={()=>deleteItem(item.id)} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setItem(text)}
        placeholder="Enter Item Name"
      />

      <TouchableOpacity style={{ ...styles.button, backgroundColor: "#1c88eb" }} onPress={add}>
        <Text style={styles.text}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop: 50 }}
        data={DataList}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'teal',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: 'white'
  },

  input: {
    height: 40,
    width: 280,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    color: "black",
    backgroundColor: "white",
    alignSelf: 'center'
  },

  button: {
    height: 40,
    width: 200,
    borderRadius: 50 / 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  text: {
    fontSize: 20,
    color: "white",
  },

  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    marginTop:12,
    marginRight:20,
  },

});

