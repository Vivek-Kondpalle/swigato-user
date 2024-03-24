import { View, Text, Pressable } from 'react-native'
import React from 'react'

const RestaurantDetailsPage = ({ route }) => {
  const { restaurantId } = route?.params;

  console.log(' restaurantId ', restaurantId);

  return (
    <View>
      <Text>RestaurantDetailsPage: {restaurantId}</Text>
      <Pressable onPress={() => navigation.navigate('CheckoutScreen')}>
        <Text>CheckoutScreenPage</Text>
      </Pressable>
    </View>
  )
}

export default RestaurantDetailsPage