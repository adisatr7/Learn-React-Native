import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function ItemList(props) {
    return (
      <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.itemCard}>
          <Text style={styles.itemText}>
            {props.text}
          </Text>
        </View>
      </Pressable>
    )
}


const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    color: 'white'
  },

  itemText: {
    flex: 9,
    color: 'dodgerblue'
  },

  itemDelete: {

  }
})