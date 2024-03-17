import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen/HomeScreen";
import RestaurantDetailsPage from "../RestaurantDetails/RestaurantDetailsPage";
import CheckoutScreenPage from "../CheckoutScreen/CheckoutScreenPage";

const Stack = createStackNavigator(); 

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsPage} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreenPage} />
    </Stack.Navigator>
  )
}

export default HomeScreenStack