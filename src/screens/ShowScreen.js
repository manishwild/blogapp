import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/BloxContext'

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context)

  // console.log(route.params.id)

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
})
export default ShowScreen
