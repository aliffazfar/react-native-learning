import React, { FC, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen: FC = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1)
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1)
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
