import { View, Text, Image, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const FoodItemCard = () => {
  return (
    <View style={{ marginHorizontal: 8, padding: 8, borderWidth: 0.25, borderRadius: 16, marginVertical: 8 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4}}>
          {/* Left Container */}
          <View style={{ maxWidth: '55%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Masala Dosa Masala Dosa Masala Dosa</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ display: 'flex', flexDirection: 'row'}}>
                <AntDesign name="star" size={14} color="#f2bf16" />
                <AntDesign name="star" size={14} color="#f2bf16" />
                <AntDesign name="star" size={14} color="#f2bf16" />
                <FontAwesome name="star-half-full" size={14} color="#f2bf16" />
              </View>
              <Text style={{ fontWeight: 'bold' }}>3.1K ratings</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>₹65</Text>
            </View>
            <View>
              <Text ellipsizeMode="tail" numberOfLines={5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </Text>
            </View>
          </View>

          {/* Right Container */}
          <View>
            <Image 
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"
              }}
              style={{ width: 150, height: 150, borderRadius: 20 }}
            />

            <TouchableOpacity style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ paddingHorizontal: 40, paddingVertical: 8, borderWidth: 0.5, position: 'relative', bottom: 20, zIndex: 10, backgroundColor: '#fff2f4', borderRadius: 12 }}>
                <Text style={{ color: '#f04f5f' }}>Add</Text>
                <Ionicons style={{ position: 'absolute', right: 5, top: 5}} name="add" size={12} color="#f04f5f" />
              </View>
            </TouchableOpacity>
            
          </View>

        </View>

      </View>
  )
}

export default FoodItemCard