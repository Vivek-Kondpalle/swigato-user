import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Card = (item) => {
    const restaurantDetails = item?.detail?.item;

    return (
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '95%', display: 'flex', alignItems: 'stretch', justifyContent: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 16, marginVertical: 8 }}>
                {/* Image */}
                <Image
                    source={{
                        uri: `${restaurantDetails?.image}`,
                    }}
                    style={{ height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                />

                {/* Restaurant Title and Rating */}
                <View style={{margin: 8 }}>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <View style={{ flexShrink: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 20 }} numberOfLines={2} ellipsizeMode="tail" >{restaurantDetails?.name}</Text>
                        </View>
                        <View style={{  flex: 0,  }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', backgroundColor: 'green', borderRadius: 8, paddingHorizontal: 6, paddingVertical: 4,marginLeft: 8 }}>
                                <Text style={{ color: 'white' }}>{restaurantDetails?.rating} </Text>
                                <AntDesign name="star" size={16} color="white" style={{ marginTop: 2 }} />
                            </View>
                        </View>
                    </View>
                    
                    {/* Subcategory */}
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8 }}>
                    {restaurantDetails?.subcategories?.map((category, index) => (
                        <Text>{category} {restaurantDetails?.subcategories?.length - 1 === index  ? ` ` : <Text style={{ fontWeight: 'bold' }}>{' \u00B7 '}</Text>}</Text>
                    ))}
                    </View>


                    {
                        restaurantDetails?.discount?.isDiscountAvailable ?
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', borderStyle: 'dotted', marginVertical: 8 }}>
                        </View>
                        :
                        null
                    }
                    {/* Discounts Section */}
                    {
                        restaurantDetails?.discount?.isDiscountAvailable ? 
                        <View style={{ display: 'flex', flexDirection: 'row'}}>
                            <MaterialIcons name="discount" size={24} color="blue" style={{ marginRight: 8}} />
                            <Text style={{ color: 'blue' }}>{restaurantDetails?.discount?.discountPercentage}% OFF upto ₹{restaurantDetails?.discount?.maxDiscount}</Text>
                        </View>
                        :
                        null
                    }
                </View>

            </View>
        </View>
    )
}

export default Card