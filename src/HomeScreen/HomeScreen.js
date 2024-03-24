import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from '../UI/Card/card';
import { restaurantDetails } from '../utils/restaurantsData';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <FlatList data={restaurantDetails} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} renderItem={(item) => <Card detail={item} />} />
    </SafeAreaView>
  )
}

export default HomeScreen