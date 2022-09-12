import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import { Max } from '../screens/Max';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false,}}>
      <Screen name="Home" component={Max}  />
      <Screen name="Max" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Details" component={Details} />
      <Screen name="Settings" component={Settings} />


    </Navigator>
  )
}