import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import FoodType from '../UI/common/foodType';

const FoodItemCard = (props) => {
  const dishDetails = props?.dishDetails?.item
  const dishIndex = props?.dishDetails?.index
  const handleCartAdd = props?.handleCartAdd
  const restaurantMenuLength = props?.restaurantMenuLength
  const cartItems = props?.cartItems

  const [itemQuantity, setItemQuantity] = useState(0)

  useEffect(() => {
    if(cartItems?.length){
      let existingItem = cartItems.find((element) => element?.id === dishDetails?.id);
      if(existingItem){
        setItemQuantity(existingItem?.quantity);
      } else {
        setItemQuantity(0);
      }
    } else {
      setItemQuantity(0);
    }
  }, [cartItems])

  return (
    <View style={{ marginBottom: (restaurantMenuLength - 1 === dishIndex && cartItems?.length) ? 64 : 0 }}>
      <View style={{ marginHorizontal: 8, padding: 8, borderWidth: 0.25, borderRadius: 16, marginVertical: 8 }}>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4}}>
            {/* Left Container */}
            <View style={{ maxWidth: '55%' }}>

              {/* Type of food. Veg / Non-veg / Egg */}
              <FoodType type={dishDetails?.type} />

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

              {
                itemQuantity ?
                <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={styles.quantitySelector}>
                    <TouchableOpacity style={styles.button} onPress={() => handleCartAdd(dishDetails, 'remove')}>
                      <AntDesign name="minus" size={12} color="#f04f5f" />
                    </TouchableOpacity>
                    
                    <Text style={styles.quantityText}>{itemQuantity}</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={() => handleCartAdd(dishDetails, 'add')}>
                      <AntDesign name="plus" size={12} color="#f04f5f" />
                    </TouchableOpacity>
                  </View>
                </View>
                : 
                <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Pressable onPress={() => handleCartAdd(dishDetails, 'add')} style={({ pressed }) => [ { paddingHorizontal: 40, paddingVertical: 8, borderWidth: 0.5, bottom: 20, backgroundColor: '#fff2f4', borderRadius: 12 }, pressed && { opacity: 0.95, backgroundColor: '#C6BABC' } ] }>
                    <Text style={{ color: '#f04f5f' }}>{itemQuantity ? itemQuantity : 'Add'}</Text>
                    <Ionicons style={{ position: 'absolute', right: 5, top: 5}} name="add" size={12} color="#f04f5f" />
                  </Pressable>
                </View>
              }
              
            </View>

          </View>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  quantitySelector: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    borderWidth: 1, // Border to encase the component
    borderColor: 'black', // Border color
    borderRadius: 8, // Rounded corners
    backgroundColor: '#fff2f4',
    bottom: 20,
    paddingVertical: 4,
    paddingHorizontal: 4
  },
  button: {
    padding: 8, // Padding for touchable area
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  quantityText: {
    paddingHorizontal: 12, // Horizontal padding around the number
    fontSize: 16, // Text size
    color: '#f04f5f', // Text color
  },
})

export default FoodItemCard