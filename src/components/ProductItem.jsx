import {View, Text} from 'react-native';

const ProductItem = ({data}) => {
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

export default ProductItem;
