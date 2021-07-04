import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";

export default function App() {
  const [getInputText, setInputText] = useState('');
  const [getList, setList] = useState(todoItems);

  const addItem = () => {
    console.log(getInputText);
    setList([
      ...getList,
      {key:Math.random().toString() , data:getInputText}
    ]);
    setInputText('');
  }
  const  removeItem = (itemKey) => {
    var list = getList.filter(item => item.key != itemKey)
    setList(list);
  }

  const empty=()=>{
    setList([]);
  }
  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key= {item.key}
          activeOpacity={0.7}
          onPress= {() => removeItem(item.key)}
        >
          <View
            style={styles.scrollItem}
          >
            <Text style={styles.scrollviewText}> {item.data}</Text>
            <View style={{backgroundColor: "#7e7e7e", borderRadius: 30, padding: 7}}>
              <Text style={styles.removeText}>Delete</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );

  const emptyScrollView = (
    <View>
      <Text style={{color: "grey", fontSize: 25}}>Empty cart</Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: "row",  margin: 5, marginTop:100,width: "95%",  height: "8%",  backgroundColor: "orange", borderRadius: 1}}>
        <Text style={{fontSize: 23,  color: "black" ,margin:15}}>Items Cart</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput }
          placeholder= "Enter Items"
          onChangeText={text => setInputText(text)}
          value={getInputText}
        />
       <TouchableOpacity style={{ ...styles.button, backgroundColor: "#1c88eb" }} onPress={addItem}>
        <Text style={styles.text}>Add Item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ ...styles.button, backgroundColor: "red" }} onPress={empty}>
        <Text style={styles.text}>Empty List</Text>
      </TouchableOpacity>


      </View>
      {getList.length <= 0 ? emptyScrollView: scrollView}
    </View>
  );
}


const todoItems = [
  {key: Math.random().toString(), data: "HeadPhones"},
]

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#13293B',
    alignItems: 'center',
    paddingTop:5
  },
  inputContainer:{
    width: "85%",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center"
  },
  textInput:{
    borderColor: "#008080",
    width: '80%',
    fontSize: 20,
    borderBottomWidth: 3,
    marginTop:20,
    padding:20,
    color:'white',
  },
  scrollItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#094eb0',
    width: "90%",
    padding: 10,
    margin: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginTop:15,
    height:60,
  },
  scrollviewText:{
    fontSize: 22,
    color: "white",
  },
  scrollview:{
    width: "100%",
  },
  removeText:{
    fontSize: 20,
    color: "white",
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
});