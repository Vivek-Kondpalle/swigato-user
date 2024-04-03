import { View, Text, Pressable, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { restaurantDetails } from '../utils/restaurantsData';

import { AntDesign, Feather } from '@expo/vector-icons';
import FoodItemCard from './FoodItemCard';



const RestaurantDetailsPage = ({ route }) => {
  const { restaurantId } = route?.params;

  const restaurantAllDetails = restaurantDetails?.find((element) => restaurantId === element?.id);

  const [cartItems, setCartItems] = useState([]);

  const handleCartAdd = (dishDetails, type) => {

    let singleCartItemDetails = {
      "id": dishDetails?.id,
      "name": dishDetails?.name,
      "image": dishDetails?.image,
      "price": dishDetails?.price,
      "type": dishDetails?.type,
    }

    if(cartItems?.length){

      let existingItemIndex = cartItems.findIndex((element) => element?.id === dishDetails?.id);
  
      if(existingItemIndex !== -1){
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        const newItem = { ...dishDetails, quantity: 1 };
        setCartItems([...cartItems, newItem]);
      }
    } else {
      singleCartItemDetails['quantity'] = 1;
      setCartItems([singleCartItemDetails])
    }

  }

  return (
    <View>
      <FlatList
        data={restaurantAllDetails?.dishes}
        renderItem={(item) => <FoodItemCard dishDetails={item} handleCartAdd={handleCartAdd} restaurantMenuLength={restaurantAllDetails?.dishes?.length} cartItems={cartItems} />}
        ListHeaderComponent={() => <Header restaurantAllDetails={restaurantAllDetails} />}
        ListFooterComponentStyle={{ marginBottom: 40 }}
        keyExtractor={(item) => item.id}
      />

      {
        cartItems?.length ? 
        <View style={{ 
          width: '100%', 
          position: 'absolute', 
          bottom: 0,
          backgroundColor: 'white', 
          shadowColor: '#000', 
          shadowOffset: { width: 10, height: 10 }, 
          shadowOpacity: 0.8, 
          shadowRadius: 5, 
          elevation: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}>
          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: 16, paddingVertical: 8 }}>

            {/* Item added */}
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
              <Feather name="shopping-bag" size={24} color="black" />
              <Text>{cartItems?.length} ITEM ADDED</Text>
            </View>

            {/* Next Button */}
            <Pressable style={{ backgroundColor: '#f04f5f', paddingVertical: 16, paddingHorizontal: 56, borderRadius: 10}}>
              <Text>Next</Text>
            </Pressable>

          </View>

        </View>
        :
        null
      }
    </View>
  )
}

const Header = (props) => {
  const restaurantAllDetails = props?.restaurantAllDetails
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 16, gap: 8 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{restaurantAllDetails?.name}</Text>
        
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          {
            restaurantAllDetails?.subcategories?.map((category, index) => (
              <Text key={index}>{category} {restaurantAllDetails?.subcategories?.length - 1 === index  ? ` ` : <Text style={{ fontWeight: 'bold' }}>{' \u00B7 '}</Text>}</Text>
            ))
          }
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', flex: 0, gap: 8, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', backgroundColor: '#257d3d', borderRadius: 8, paddingHorizontal: 6, paddingVertical: 4,marginLeft: 8 }}>
              <Text style={{ color: 'white' }}>{restaurantAllDetails?.rating} </Text>
              <AntDesign name="star" size={16} color="white" style={{ marginTop: 2 }} />
          </View>
          <View>
            <Text>{restaurantAllDetails?.totalRatings} ratings</Text>
          </View>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  cardTopSection: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardRating: {
    flexDirection: 'row',
  },
  ratingStars: {
    color: 'gold',
  },
  ratingCount: {
    color: 'gray',
    marginLeft: 5,
  },
  cardImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  cardImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  cardBottomSection: {
    padding: 10,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    color: 'gray',
    marginBottom: 10,
  },
  addToCartButtonContainer: {
    alignItems: 'flex-end',
  },
  addToCartButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RestaurantDetailsPage