import { View, Text, Pressable, StyleSheet, FlatList, TextInput, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import Card from '../UI/Card/card';
import { restaurantDetails } from '../utils/restaurantsData';
import { Entypo } from '@expo/vector-icons';


const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
        <View style={{ display: 'flex', justifyContent: 'center',  width: '100%' }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 8}}>
            <Text>{restaurantDetails?.length} Restaurants delivering to you</Text>
          </View>
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

const styles = StyleSheet.create({
  customHeader: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // padding: 10,
    // Set your preferred styling for the header
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    // Set your preferred styling for the search bar
  },
  // Add styles for other components
});

export default HomeScreen