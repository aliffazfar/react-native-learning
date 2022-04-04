import React from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text style={styles.text}>This is home Page</Text>
      <Button
        title='Go to Components List'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Text Screen Demo'
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
