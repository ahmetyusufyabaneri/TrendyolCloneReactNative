import {View, Image} from 'react-native';
import WidgetTitle from './WidgetTitle';

const Introduction = ({item}) => {
  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <View
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
      </View>
    </View>
  );
};

export default Introduction;
