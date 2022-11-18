import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, FlatList, Text, TextInput, View } from 'react-native'

import styles from './app/components/style'

export default function App() {

  const [enteredListText, setEnteredListText] = useState('')
  const [list, setList] = useState([])

  function listInputHandler(enteredText) {
    setEnteredListText(enteredText)
  }

  function addListHandler() {
    setList( currentList => [
      ...currentList, 
      { text: enteredListText, key: Math.random().toString() }
    ] )
    Alert.alert("Success", "List added!", [{text: "Close"}])
  }
  

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Add something..." 
          onChangeText={listInputHandler} 
        />
        <Button title="Add" onPress={addListHandler} color='orange' />
      </View>

      <View style={styles.listContainer}>
        <FlatList 
          data={list} 
          alwaysBounceVertical={true}
          keyExtractor={(item, index) => {return item.id}}
          renderItem={listData => {
            return (
              <View style={styles.list}>
                <Text style={{color: 'white'}}>
                  {listData.item.text}
                </Text>
              </View>
            )
        }} >

        </FlatList>
      </View>
    </SafeAreaView>
  )
}
