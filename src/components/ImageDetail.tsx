import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface imageDetailProp {
  title: string
  imageSource: number
  imageScore: string
}

const ImageDetail: FC<imageDetailProp> = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Show Image {props.title}</Text>
      <Text>Image Score {props.imageScore}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
