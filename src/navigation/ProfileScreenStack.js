import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import FavoritesScreen from "../FavoritesScreen/FavoritesScreen";
import UserProfileScreen from "../UserProfile/UserProfileScreen";
import AddressBookScreen from "../AddressBook/AddressBookScreen";
import LanguageScreen from "../Language/LanguageScreen";

const Stack = createStackNavigator();

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    >
      <Stack.Screen name="ProfilePage" component={ProfileScreen} />
      <Stack.Screen name="FavoritesPage" component={FavoritesScreen} />
      <Stack.Screen name="UserProfilePage" component={UserProfileScreen} />
      <Stack.Screen name="AddressBookPage" component={AddressBookScreen} />
      <Stack.Screen name="LanguagePage" component={LanguageScreen} />
    </Stack.Navigator>
  )
}

export default ProfileScreenStack