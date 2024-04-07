import React, { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';


const CouponsScreenPage = () => {
    const [couponName, setCouponName] = useState('');

    return (
        <ScrollView style={{ marginHorizontal: 16 }}>

            <View style={{ flexDirection: 'row', marginVertical: 16, padding: 16, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderRadius: 16 }}>
                <TextInput onChangeText={setCouponName} value={couponName} placeholder='Type coupon code here' />
                <Pressable>
                    <Text>APPLY</Text>
                </Pressable>
            </View>

            <View style={{ marginVertical: 16, alignItems: 'center' }}>
                <Text>BEST OFFERS FOR YOU</Text>
            </View>

            {
                [1, 2, 3, 4, 5]?.map((item, index) => (
                    <View key={index} style={{ backgroundColor: 'white', borderRadius: 16, marginVertical: 8 }}>

                        <View style={{ flexDirection: 'row', padding: 16, gap: 16, alignItems: 'baseline', borderBottomWidth: 0.5, borderBottomColor: 'grey' }}>
                            <View>
                                <View style={{ backgroundColor: '#246ff0', padding: 6, borderRadius: 50 }}>
                                    <FontAwesome6 name="percentage" size={12} color="white" />
                                </View>
                            </View>
                            <View style={{ gap: 12, flex: 1 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Flat ₹150 OFF</Text>
                                <Text>Save ₹150 with this code</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ padding: 4, borderColor: 'grey', borderWidth: 1, letterSpacing: 1 }}>HITFORSIX</Text>
                                    <View>
                                        <Text>View Details</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 12, backgroundColor: '#f7faff', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                            <Text>TAP TO APPLY</Text>
                        </View>

                    </View>
                ))
            }

        </ScrollView>
    )
}

export default CouponsScreenPage