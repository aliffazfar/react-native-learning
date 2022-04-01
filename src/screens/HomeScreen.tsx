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
        title='Go to Image Screen'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Screen'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => navigation.navigate('Color')}
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
