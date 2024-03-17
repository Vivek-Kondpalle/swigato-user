import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text>OrdersScreen</Text>
      <Pressable onPress={() => navigation.navigate('OrderSummary')}>
        <Text>OrderSummaryPage</Text>
      </Pressable>
    </View>
  )
}

export default OrdersScreen