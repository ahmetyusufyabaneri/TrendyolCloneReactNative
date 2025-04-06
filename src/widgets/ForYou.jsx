import {View, Text} from 'react-native';
import WidgetTitle from './WidgetTitle';

const ForYou = ({item}) => {
  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <Text>ForYou</Text>
    </View>
  );
};

export default ForYou;
