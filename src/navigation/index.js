import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreenStack from "./HomeScreenStack";
import OrdersScreenStack from "./OrdersScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'transparent' }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreenStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }} />
      <Tab.Screen 
        name="Orders" 
        component={OrdersScreenStack} 
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreenStack} 
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs