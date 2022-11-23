import { Platform, StyleSheet, StatusBar } from 'react-native'


export default styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 3,
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight +5 : 0,
      marginHorizontal: 8,
      paddingHorizontal: 16
    },
  
    itemListContainer: {
      flex: 4,
      width: '100%',
      marginTop: 5
    }
  })