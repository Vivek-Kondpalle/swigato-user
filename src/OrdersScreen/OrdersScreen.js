import { View, Text, Pressable, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { orderDetails } from '../utils/ordersData';
import OrderCard from './OrderCard';
import OrderSeachBar from './OrderSeachBar';

const OrdersScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ height: '100%', marginHorizontal: 8 }}>
      <FlatList 
        data={orderDetails} 
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <OrderCard detail={item} />} 
        contentContainerStyle={{ paddingBottom: 40 }}
        ListHeaderComponent={<OrderSeachBar />}
      />
    </SafeAreaView>
  )
}

export default OrdersScreen