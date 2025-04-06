import {View, Text} from 'react-native';
import WidgetTitle from './WidgetTitle';

const BestSellers = ({item}) => {
  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <Text>BestSellers</Text>
    </View>
  );
};

export default BestSellers;
