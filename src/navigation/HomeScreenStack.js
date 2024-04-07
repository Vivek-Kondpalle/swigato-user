import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen/HomeScreen";
import RestaurantDetailsPage from "../RestaurantDetails/RestaurantDetailsPage";
import CheckoutScreenPage from "../CheckoutScreen/CheckoutScreenPage";
import PersonalDetailsScreenPage from "../CheckoutScreen/PersonalDetailsScreen";
import CouponsScreenPage from "../CheckoutScreen/CouponsScreenPage";
import PaymentScreenPage from "../CheckoutScreen/PaymentScreenPage";
import AddressScreenPage from "../CheckoutScreen/AddressScreenPage";

const Stack = createStackNavigator(); 

const forSlideUp = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0], // Start from the bottom of the screen
          }),
        },
      ],
    },
  };
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    >
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsPage} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreenPage} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreenPage} />
        <Stack.Screen name="CouponsScreen" component={CouponsScreenPage} />
        <Stack.Screen name="AddAddressScreen" component={AddressScreenPage} />
        <Stack.Screen 
          name="PaymentScreen" 
          component={PaymentScreenPage} 
          options={{
            cardStyleInterpolator: forSlideUp, // Custom animation for PaymentScreen
            gestureDirection: 'vertical', // Enable swiping down to close
          }} 
        />
    </Stack.Navigator>
  )
}

export default HomeScreenStack