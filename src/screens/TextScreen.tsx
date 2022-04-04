import React, { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen: FC = () => {
  const [password, setPassword] = useState<string>('')
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
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
