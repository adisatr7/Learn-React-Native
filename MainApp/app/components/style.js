import { Platform, StyleSheet, StatusBar } from 'react-native'


export default styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 3,
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      marginHorizontal: 8,
      paddingHorizontal: 16
    },
  
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
  
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 5,
      width: '80%',
      marginRight: 8
    },
  
    listContainer: {
      flex: 4,
      width: '100%',
      marginTop: 5
    },

    list: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      color: 'white'
    }
  })