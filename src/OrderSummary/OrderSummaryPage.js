import { View, Text } from 'react-native'
import React from 'react'

const OrderSummaryPage = ({ route }) => {
  const { orderId } = route?.params;

  return (
    <View>
      <Text>OrderSummaryPage - {orderId}</Text>
    </View>
  )
}

export default OrderSummaryPage