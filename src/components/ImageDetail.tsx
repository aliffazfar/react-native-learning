import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface imageDetailProp {
  title: string
  imageSource: number
  imageScore: string
}

const ImageDetail: FC<imageDetailProp> = ({
  title,
  imageSource,
  imageScore,
}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Show Image {title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
