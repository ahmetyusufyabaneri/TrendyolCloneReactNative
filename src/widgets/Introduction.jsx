import {View, Text} from 'react-native';
import WidgetTitle from './WidgetTitle';

const Introduction = ({item}) => {
  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <Text>Categories</Text>
    </View>
  );
};

export default Introduction;
