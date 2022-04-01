import React, { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// This is how it can be done

const ComponentsScreen: FC = () => {
  const friends = [
    {
      name: 'Friend 1',
      age: 21,
    },
    {
      name: 'Friend 2',
      age: 24,
    },
    {
      name: 'Friend 3',
      age: 25,
    },
    {
      name: 'Friend 4',
      age: 20,
    },
    {
      name: 'Friend 5',
      age: 29,
    },
    {
      name: 'Friend 6',
      age: 21,
    },
    {
      name: 'Friend 7',
      age: 28,
    },
    {
      name: 'Friend 8',
      age: 21,
    },
    {
      name: 'Friend 9',
      age: 24,
    },
  ]

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
  },
})

export default ComponentsScreen
