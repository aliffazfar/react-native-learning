import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen: FC = () => {
  const [red, setRed] = useState<any>(0)
  const [green, setGreen] = useState<any>(0)
  const [blue, setBlue] = useState<any>(0)

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
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
