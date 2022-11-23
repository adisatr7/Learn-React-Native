import { useState } from 'react'
import { Text, Pressable, StyleSheet, TextInput, View, Modal } from 'react-native'


export default function ItemInput(props) {

  const [enteredItemText, setEnteredItemText] = useState('')

  function inputTextFieldHandler(enteredText) {
    setEnteredItemText(enteredText)
  }

  function addItemHandler() {
    props.onAddItem(enteredItemText)
    setEnteredItemText('')
  }

  return (
    <Modal visible={props.visible} animationType='fade' >
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textField} 
          placeholder="Add something..." 
          onChangeText={inputTextFieldHandler}
          value={enteredItemText}
          
        />
        <Pressable onPress={addItemHandler} style={styles.addButton} >
              <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
        <Pressable onPress={props.onCancel} style={styles.cancelButton} >
              <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 10
  },

  addButton: {
    position: 'absolute',
    borderRadius: 500,
    backgroundColor: 'dodgerblue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    right: 4
  },

  addButtonText: {
    color: 'white'
  },

  cancelButton: {
    position: 'absolute',
    borderRadius: 500,
    backgroundColor: 'dodgerblue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    right: 52
  },

  cancelButtonText: {
    color: 'white'
  },

  textField: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 5,
    width: '100%',
    height: 35,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 120
  },
})