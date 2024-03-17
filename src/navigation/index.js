import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreenStack from "./HomeScreenStack";
import OrdersScreenStack from "./OrdersScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";

const Tab = createMaterialBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="Orders" component={OrdersScreenStack} />
      <Tab.Screen name="Profile" component={ProfileScreenStack} />
    </Tab.Navigator>
  )
}

export default MyTabs