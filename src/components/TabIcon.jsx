import {screenNames} from '../types/screenNames';
import {Home, Google, Heart, ShoppingCart, Profile} from 'iconsax-react-native';

const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case screenNames.Home:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    case screenNames.Go:
      return (
        <Google
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    case screenNames.Favourites:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    case screenNames.Cart:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    case screenNames.Profile:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
  }
};

export default TabIcon;
