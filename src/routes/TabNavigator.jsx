import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from '../types/screenNames';
import Home from '../screens/Home';
import Go from '../screens/Go';
import Favourites from '../screens/Favourites';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import TabIcon from '../components/TabIcon';
import {colors} from '../themes/colors';
import {Pressable, View} from 'react-native';
import {Sms, NotificationBing} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarIcon: ({size, color, focused}) => (
          <TabIcon
            name={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerRight: props => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 20,
              marginRight: 12,
              marginBottom: 4,
            }}>
            <Pressable
              onPress={() => navigation.navigate(screenNames.Notifications)}>
              <Sms size={28} color={colors.black} variant="Linear" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(screenNames.Notices)}>
              <NotificationBing
                size={28}
                color={colors.black}
                variant="Linear"
              />
            </Pressable>
          </View>
        ),
      })}>
      <Tab.Screen name={screenNames.Home} component={Home} />
      <Tab.Screen name={screenNames.Go} component={Go} />
      <Tab.Screen name={screenNames.Favourites} component={Favourites} />
      <Tab.Screen name={screenNames.Cart} component={Cart} />
      <Tab.Screen name={screenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
