import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text>HomeScreen</Text>
      <Pressable onPress={() => navigation.navigate('RestaurantDetails')}>
        <Text>RestaurantDetailsPage</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen