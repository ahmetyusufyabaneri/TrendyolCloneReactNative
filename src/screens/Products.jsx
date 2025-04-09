import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {screenStyle} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getProducts} from '../app/actions/productAction';
import {colors} from '../themes/colors';
import ProductItem from '../components/ProductItem';

const Products = () => {
  const dispatch = useDispatch();

  const {products, isLoading, isError} = useSelector(
    state => state.rootReducer.product,
  );

  console.log(products, isLoading, isError);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.gray} />
        </View>
      ) : isError ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>{isError}</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem data={item} />}
        />
      )}
    </View>
  );
};

export default Products;
