import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { restaurantDetails } from '../utils/restaurantsData'
import Card from '../UI/Card/card'

const FavoritesScreen = () => {

  return (
    <SafeAreaView style={{height: '100%'}}>
        <View style={{ display: 'flex', justifyContent: 'center',  width: '100%' }}>
          <FlatList 
            data={restaurantDetails} 
            keyExtractor={item => item.id} 
            showsVerticalScrollIndicator={false} 
            renderItem={(item) => <Card detail={item} />} 
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
    </SafeAreaView>
  )
}

export default FavoritesScreen