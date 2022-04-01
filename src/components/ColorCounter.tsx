import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

interface ColorProp {
  color: string
  onIncrease: () => void
  onDecrease: () => void
}

const ColorCounter: FC<ColorProp> = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})
