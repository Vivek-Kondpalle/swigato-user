import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import FoodType from '../UI/common/foodType'
import { AntDesign, FontAwesome6, MaterialCommunityIcons, Feather, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../UI/Modal/CustomModal';


const BOTTOM_VIEW_HEIGHT = 150;


const CheckoutScreenPage = () => {
  const navigation = useNavigation();

  const [viewModal, setViewModal] = useState(false);

  const openAddressChangeModal = () => {
    setViewModal(true)
  }

  const closeAddressChangeModal = () => {
    setViewModal(false)
  }

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: BOTTOM_VIEW_HEIGHT + 20 }}>
        <View style={{ marginHorizontal: 16 }}>
          {/* Items Review */}
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 16 }}>
            <Text>ITEM(S) ADDED</Text>
          </View>

          <View style={{ backgroundColor: 'white', borderRadius: 16 }}>

            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, index) => (
                <View key={index} style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>

                  <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
                    {/* Food Type */}
                    <View>
                      <FoodType type={'veg'} />
                    </View>

                    {/* Food item name */}
                    <View>
                      <Text>Khatta Meetha Poha</Text>
                      <Text>₹65</Text>
                    </View>
                  </View>

                  {/* Food item quantity */}
                  <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', gap: 4 }}>
                    <View style={styles.quantitySelector}>
                      <TouchableOpacity style={styles.button}>
                        <AntDesign name="minus" size={12} color="#f04f5f" />
                      </TouchableOpacity>

                      <Text style={styles.quantityText}>1</Text>

                      <TouchableOpacity style={styles.button}>
                        <AntDesign name="plus" size={12} color="#f04f5f" />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: 8 }}>
                      <Text>₹65</Text>
                    </View>
                  </View>

                </View>
              ))

            }

          </View>


          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
            <Text>SAVINGS CORNER</Text>
          </View>

          <Pressable onPress={() => { navigation?.navigate('CouponsScreen')}}  style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={{ backgroundColor: '#246ff0', padding: 6, borderRadius: 50 }}>
                <FontAwesome6 name="percentage" size={12} color="white" />
              </View>
              <Text>Apply coupon</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </Pressable>

          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
            <Text>BILL SUMMARY</Text>
          </View>

          <View style={{ padding: 12, backgroundColor: 'white', borderRadius: 10, marginBottom: 16 }}>

            {/* Subtotal */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Subtotal</Text>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>₹65</Text>
            </View>

            {/* Taxes and charges */}
            <View style={{ marginVertical: 16 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <MaterialCommunityIcons name="pillar" size={16} color="black" />
                  <Text style={{ fontSize: 12, fontWeight: '500' }}>GST and restaurant Charges</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: '500' }}>₹8.50</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <MaterialCommunityIcons name="bike-fast" size={16} color="black" />
                  <Text style={{ fontSize: 12, fontWeight: '500' }}>Delivery Charges</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, fontWeight: '500' }}>₹70</Text>
                </View>
              </View>
            </View>

            {/* Grand Total */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, fontWeight: '500' }}>Grand Total</Text>
              <Text style={{ fontSize: 12, fontWeight: '500' }}>₹142.50</Text>
            </View>

          </View>


          {/* Your Details */}
          <Pressable onPress={() => { navigation?.navigate('PersonalDetailsScreen')}} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', marginVertical: 16 }}>
            <View>
              <Text>Your details</Text>
              <Text>Vivek Kondpalle, 8308037396</Text>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </Pressable>


          {/* Order for someone else */}
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', marginVertical: 16, marginBottom: 80 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <MaterialCommunityIcons name="package-variant-closed" size={24} color="black" />
              <View>
                <Text style={{ fontSize: 16 }}>Ordering for someone else?</Text>
                <Text style={{ fontSize: 12 }}>Add receiver details for hassle free delivery</Text>
              </View>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View> */}

        </View>

      </ScrollView>

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        minHeight: BOTTOM_VIEW_HEIGHT,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      }}>
        
        <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row', marginHorizontal: 16, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
          <View>
            <FontAwesome6 name="location-dot" size={24} color="#f04f5f" />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
              <Text numberOfLines={1} ellipsizeMode="tail">Delivery at 
                <Text style={{ fontWeight: 'bold' }}> Home</Text>
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail">Park View Comforts, 101, 1-floor, sector 3, HSR Layout, Bangalore, 560102</Text>
          </View>
          <Pressable onPress={openAddressChangeModal}>
            <Text style={{ color: '#f04f5f' }}>
              Change
            </Text>
          </Pressable>
        </View>

        <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: 16, paddingVertical: 8 }}>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <Pressable onPress={() => { navigation?.navigate('PaymentScreen')}}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={{ color:'grey' }}>Pay using</Text>
                <AntDesign name="caretup" size={12} color='grey' style={{ marginTop: 4 }} />
              </View>
              <View>
                <Text>
                  PhonePe UPI
                </Text>
              </View>
            </Pressable>
          </View>

          {/* Next Button */}
          <Pressable style={{ gap: 48, backgroundColor: '#f04f5f', padding: 16, borderRadius: 10, flexDirection: 'row', alignItems: 'center', }}>
            <View>
              <Text style={{ color: 'white' }}>₹142.50</Text>
              <Text style={{ color: 'white' }}>Total</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={{ color: 'white' }}>Place Order</Text>
              <AntDesign name="caretright" size={12} color="white" />
            </View>
          </Pressable>

        </View>

        <CustomModal visible={viewModal} onClose={closeAddressChangeModal} backgroundColor="#f7f7f7">
          <SavedAddressPreview setViewModal={setViewModal} />
        </CustomModal>

      </View>
    </>
  )
}


const SavedAddressPreview = (props) => {
  const navigation = useNavigation();

  const setViewModal = props?.setViewModal;

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Select an address</Text>
      </View>

      <ScrollView style={{ marginVertical: 24 }}>
        <Pressable onPress={() => { setViewModal(false); navigation?.navigate('AddAddressScreen')}}  style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingVertical: 12, paddingHorizontal: 12, marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Feather name="plus" size={24} color="#f04f5f" />
            <Text style={{ color: '#f04f5f' }}>Add Address</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </Pressable>
        {
          [1, 2, 3, 4, 5, 6]?.map((item, index) => {
            return (
              <View key={index} style={{ marginVertical: 8 }}>
                <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 12 }}>
                  <View style={{ marginBottom: 8 }}>
                    <Text>Delivers To</Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Foundation name="home" size={24} color="black" />
                      <Text>8m</Text>
                    </View>
                    <View style={{ gap: 8 }}>
                      <Text>Home</Text>
                      <Text numberOfLines={3} ellipsizeMode="tail">Park View Comforts, 101, 1-floor, sector 3, HSR Layout, Bangalore, 560102</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
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
  },
  button: {
    padding: 8, // Padding for touchable area
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  quantityText: {
    paddingHorizontal: 12, // Horizontal padding around the number
    fontSize: 12, // Text size
    color: '#f04f5f', // Text color
  },
})

export default CheckoutScreenPage