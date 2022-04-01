import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'

const ColorScreen: FC = () => {
  const [colors, setColors] = useState<any>([])

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen

const styles = StyleSheet.create({})
