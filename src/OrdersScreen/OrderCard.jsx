import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import FoodType from '../UI/common/foodType';

import { useNavigation } from '@react-navigation/native';


const OrderCard = (props) => {
    const detail = props?.detail?.item;

    const navigation = useNavigation();

    const goToSummary = () => {
        navigation.navigate('OrderSummary', {
            orderId: detail?.id
        })
    }

    const goToRestaurantDetails = () => {
        navigation.navigate('RestaurantDetails', {
            restaurantId: detail?.restaurantId
        })
    }

    return (
        <View style={{ marginVertical: 16, borderRadius: 16, borderColor: 'grey', borderWidth: 1, flex: 1 }}>

            <Pressable onPress={goToRestaurantDetails} style={{ borderBottomWidth: 0.5, borderBottomColor: 'grey' }}>
                <View style={{ padding: 12, flexDirection: 'row', gap: 8 }}>
                    <View>
                        <Image source={{ uri: detail?.restaurantImage }} style={{ height: 50, width: 50, marginTop: 2, borderRadius: 12 }}  />
                    </View>
                    <View style={{ flex: 1, gap: 4 }}>
                        <Text>{detail?.restaurantName}</Text>
                        <Text style={{ flex: 1 }} numberOfLines={1} ellipsizeMode='tail'>{detail?.restaurantAddress}</Text>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Text style={{ color: '#f04f5f' }}>View Menu</Text>
                            <AntDesign name="caretright" size={12} color='#f04f5f' />
                        </Pressable>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={goToSummary} style={{ borderBottomWidth: 0.5, borderBottomColor: 'grey', padding: 12 }}>
                {
                    detail?.items?.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                            <FoodType type={item?.foodType} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{item?.quantity}</Text>
                                <Text> X </Text>
                                <Text style={{ fontWeight: 'bold' }}> {item?.name} </Text>
                            </View>
                        </View>
                    ))
                }
            </Pressable>

            <Pressable onPress={goToSummary} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{detail?.paymentDate}</Text>
                <View style={{ flexDirection: 'row', alignItems:'center', gap: 4 }}>
                    <Text>₹{detail?.grandTotal}</Text>
                    <AntDesign name="right" size={14} color="black" />
                </View>
            </Pressable>

        </View>
    )
}

export default OrderCard