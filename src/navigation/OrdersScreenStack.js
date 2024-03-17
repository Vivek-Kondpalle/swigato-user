import { createStackNavigator } from "@react-navigation/stack"
import OrdersScreen from "../OrdersScreen/OrdersScreen"
import OrderSummaryPage from "../OrderSummary/OrderSummaryPage"

const Stack = createStackNavigator()

const OrdersScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrdersPage" component={OrdersScreen} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryPage} />
    </Stack.Navigator>
  )
}

export default OrdersScreenStack