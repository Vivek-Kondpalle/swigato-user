import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreenStack from "./HomeScreenStack";
import OrdersScreenStack from "./OrdersScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useCallback, useState } from "react";
import { getFocusedRouteNameFromRoute, useFocusEffect } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator()

const MyTabs = () => {

  // const [isFocused, setIsFocused] = useState(true); // Assume tab is initially visible

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onRouteChange = getFocusedRouteNameFromRoute(state); // Get the current route name
  //     setIsFocused(onRouteChange === 'HomePage' || onRouteChange === 'OrdersScreen' || onRouteChange === 'ProfileScreen');
  //     return () => setIsFocused(false); // Hide tab bar when outside main tabs
  //   }, [])
  // );

  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'transparent' }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreenStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          // tabBarVisible: isFocused,
        }} />
      <Tab.Screen 
        name="Orders" 
        component={OrdersScreenStack} 
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
          // tabBarVisible: isFocused,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreenStack} 
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
          // tabBarVisible: isFocused,
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs