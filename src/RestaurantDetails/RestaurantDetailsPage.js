import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RestaurantDetailsPage = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>RestaurantDetailsPage</Text>
      <Pressable onPress={() => navigation.navigate('CheckoutScreen')}>
        <Text>CheckoutScreenPage</Text>
      </Pressable>
    </View>
  )
}

export default RestaurantDetailsPage