import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

import { orderDetails } from '../utils/ordersData';
import FoodType from '../UI/common/foodType';

const OrderSummaryPage = ({ route }) => {
  const { orderId } = route?.params;

  const orderAllDetails = orderDetails?.find((element) => orderId === element?.id);

  return (
    <ScrollView style={{ marginHorizontal: 12, marginVertical: 12 }}>

      <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{orderAllDetails?.restaurantName}</Text>
        <Text style={{ fontSize: 14, fontWeight: '400' }}>{orderAllDetails?.restaurantAddress}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8, marginVertical: 12 }}>
          <Pressable style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 0.5, flex: 1, gap: 8, paddingVertical: 4, borderRadius: 8 }}>
            <AntDesign name="download" size={12} color='#f04f5f' />
            <Text>Download Invoice</Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 0.5, flex: 1, gap: 8, paddingVertical: 4, borderRadius: 8 }}>
            <AntDesign name="download" size={12} color='#f04f5f' />
            <Text>Download Summary</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 24 }}>

        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.75 }}>
          <Text>Your Order</Text>
        </View>

        {
          orderAllDetails?.items?.map((item, index) => (
            <View key={index}>

              <View style={{ marginVertical: 8, borderBottomColor: 'grey', borderBottomWidth: 0.5, gap: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <FoodType type={item?.foodType} />
                  <Text>{item?.name}</Text>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 12 }}>  
                  <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                    <View style={{ borderColor: '#267e3e', borderWidth: 1, backgroundColor: '#edf7f1', paddingHorizontal: 8, paddingVertical: 2 }}>
                      <Text>{item?.quantity}</Text>
                    </View>
                    <Text>X</Text>
                    <Text style={{ fontWeight: '600'}}>₹{item?.pricePerItem}</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: '600'}}>₹{item?.totalPrice}</Text>
                  </View>
                </View>
                

              </View>

            </View>
          ))
        }

      </View>

    </ScrollView>
  )
}

export default OrderSummaryPage