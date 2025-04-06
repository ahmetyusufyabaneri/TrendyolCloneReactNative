import {View, Text} from 'react-native';
import WidgetTitle from './WidgetTitle';

const Categories = ({item}) => {
  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;
