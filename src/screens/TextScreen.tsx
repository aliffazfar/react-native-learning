import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen: FC = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})
