import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen: FC = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore='5'
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        imageScore='9'
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore='10'
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
