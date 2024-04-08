import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenStack from "./HomeScreenStack";
import OrdersScreenStack from "./OrdersScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from "react";

const Tab = createBottomTabNavigator()

const MyTabs = (props) => {

  const hideBottomTabsInScreens = ['RestaurantDetails', 'CheckoutScreen', 'CouponsScreen', 'PersonalDetailsScreen', 'AddAddressScreen', 'PaymentScreen'];

  const hide = hideBottomTabsInScreens?.includes(props?.routeName) ? true : false;

  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
      }}
      barStyle={{ backgroundColor: 'transparent' }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreenStack} 
        options={{
          tabBarStyle: { 
            display : hide ? 'none' : 'flex', 
            height: 60,
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }} />
      <Tab.Screen 
        name="Orders" 
        component={OrdersScreenStack} 
        options={{
          tabBarStyle: {
            height: 60
          },
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreenStack} 
        options={{
          tabBarStyle: {
            height: 60
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs