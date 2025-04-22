import {useNavigation} from '@react-navigation/native';
import {View, Image, Pressable} from 'react-native';
import {screenNames} from '../types/screenNames';

const Introduction = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate(screenNames.Products)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1658/pimWidgetApi/mobile_20250403044756_3163917CocukMobile202504021703.jpg',
          }}
          style={{width: 400, height: 200, resizeMode: 'contain'}}
        />
      </Pressable>
    </View>
  );
};

export default Introduction;
