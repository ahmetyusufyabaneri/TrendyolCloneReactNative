import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../types/screenNames';
import TabNavigator from './TabNavigator';
import Auth from '../screens/Auth';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import Notifications from '../screens/Notifications';
import Notices from '../screens/Notices';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={screenNames.Tab}
        component={TabNavigator}
      />
      <Stack.Screen name={screenNames.Auth} component={Auth} />
      <Stack.Screen name={screenNames.Products} component={Products} />
      <Stack.Screen
        name={screenNames.ProductDetail}
        component={ProductDetail}
        options={{
          headerTitle: 'Product Detail',
        }}
      />
      <Stack.Screen
        name={screenNames.Notifications}
        component={Notifications}
      />
      <Stack.Screen name={screenNames.Notices} component={Notices} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
