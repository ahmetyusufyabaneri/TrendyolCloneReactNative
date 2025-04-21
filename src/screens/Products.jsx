import {FlatList, Text, View} from 'react-native';
import {screenStyle} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getProducts} from '../app/actions/productAction';
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

const Products = () => {
  const dispatch = useDispatch();

  const {products, isLoading, isError} = useSelector(
    state => state.rootReducer.product,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <Spinner />
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
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
            marginTop: 8,
          }}
        />
      )}
    </View>
  );
};

export default Products;
