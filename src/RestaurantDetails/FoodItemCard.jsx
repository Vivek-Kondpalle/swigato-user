import { View, Text, Image, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const FoodItemCard = (props) => {
  const dishDetails = props?.dishDetails?.item
  const handleCartAdd = props?.handleCartAdd

  return (
    <View style={{ marginHorizontal: 8, padding: 8, borderWidth: 0.25, borderRadius: 16, marginVertical: 8 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4}}>
          {/* Left Container */}
          <View style={{ maxWidth: '55%' }}>

            {/* Type of food. Veg / Non-veg / Egg */}
            <FoodTypeSymbol type={dishDetails?.type} />

            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{dishDetails?.name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ display: 'flex', flexDirection: 'row'}}>
                <AntDesign name="star" size={14} color="#f2bf16" />
                <AntDesign name="star" size={14} color="#f2bf16" />
                <AntDesign name="star" size={14} color="#f2bf16" />
                <FontAwesome name="star-half-full" size={14} color="#f2bf16" />
              </View>
              <Text style={{ fontWeight: 'bold' }}>{dishDetails?.totalRatings} ratings</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>₹{dishDetails?.price}</Text>
            </View>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={5}>{dishDetails?.description}</Text>
            </View>
          </View>

          {/* Right Container */}
          <View>
            <Image 
              source={{
                uri: dishDetails?.image
              }}
              style={{ width: 150, height: 150, borderRadius: 20 }}
            />

            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pressable onPress={handleCartAdd} style={({ pressed }) => [ { paddingHorizontal: 40, paddingVertical: 8, borderWidth: 0.5, bottom: 20, backgroundColor: '#fff2f4', borderRadius: 12 }, pressed && { opacity: 0.95, backgroundColor: '#C6BABC' } ] }>
                <Text style={{ color: '#f04f5f' }}>Add</Text>
                  <Ionicons style={{ position: 'absolute', right: 5, top: 5}} name="add" size={12} color="#f04f5f" />
              </Pressable>
            </View>
            
          </View>

        </View>

      </View>
  )
}

const FoodTypeSymbol = (props) => {
  const foodType = props?.type;


  return (
    <View style={{ width: 16, height: 16, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor:  foodType === 'veg' ? 'green' : 'red' , borderWidth: 1 }}>
      <View style={{ width: 8, height: 8, backgroundColor: foodType === 'veg' ? 'green' : 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}></View>
    </View>
  )
}

export default FoodItemCard