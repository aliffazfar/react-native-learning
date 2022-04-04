import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT: number = 15

const SquareScreen: FC = () => {
  const [red, setRed] = useState<number>(0)
  const [blue, setBlue] = useState<number>(0)
  const [green, setGreen] = useState<number>(0)

  const setColor = (color: string, change: number) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change)
        return
      default:
        return
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color='Green'
      />
      <View
        style={{
          alignSelf: 'center',
          marginVertical: 30,
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})
