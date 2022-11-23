import React, { useState } from 'react'
import { SafeAreaView, FlatList, View, Alert, Button } from 'react-native'

import ItemList from './app/components/ItemList'
import ItemInput from './app/components/ItemInput'
import styles from './app/assets/Style'


export default function App() {

  const [item, setItem] = useState([])
  const [modalIsVIsible, setModalVisibility] = useState(false)


  function startAddItemHandler() {
    setModalVisibility(true)
  }

  function endAddItemHandler() {
    setModalVisibility(false)
  }

  function addItemHandler(enteredItemText) {
    setItem( currentItem => [
      ...currentItem, 
      { text: enteredItemText, id: Math.random().toString() }
    ])
    Alert.alert("Berhasil", "Sebuah item berhasil ditambahkan ke daftar!", [
      {text: "Okay"},
      {text: "Ya udah sih"}
    ])
    endAddItemHandler()
  }

  function deleteItemHandler(id) {
    Alert.alert("Hapus Data", "Yakin mau hapus data?", [
      { text: "No" },
      { text: "Yes", onPress: () => {
        setItem(currentItem => {
          return currentItem.filter((item) => item.id !== id)
        })
        Alert.alert("Berhasil", "Data berhasil dihapus!", [{ text: "Tutup" }])
      }}
    ])
  }


  return (
    <SafeAreaView style={styles.mainContainer}>

      <Button title="Add New" onPress={startAddItemHandler} />
      
      {/* Where user inputs a new item */}
      <ItemInput visible={modalIsVIsible} onAddItem={addItemHandler} onCancel={endAddItemHandler} />

      {/* Where list of items are 'rendered' */}
      <View style={styles.itemListContainer}>
        <FlatList 
          data={item} 
          alwaysBounceVertical={true}
          keyExtractor={(item, index) => {return item.id}}
          renderItem={itemData => {
            return <ItemList 
              text={itemData.item.text}
              id={itemData.item.id} 
              onDeleteItem={deleteItemHandler}
              /> 
          }}
        />
      </View>
    </SafeAreaView>
  )
}
