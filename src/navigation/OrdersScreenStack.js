import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import OrdersScreen from "../OrdersScreen/OrdersScreen"
import OrderSummaryPage from "../OrderSummary/OrderSummaryPage"

const Stack = createStackNavigator()

const OrdersScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="OrdersPage" component={OrdersScreen} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryPage} />
    </Stack.Navigator>
  )
}

export default OrdersScreenStack