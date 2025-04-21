import {FlatList, View} from 'react-native';
import {screenStyle} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getProducts} from '../app/actions/productAction';
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import Categories from '../widgets/Categories';
import {screenHeight} from '../constants';

const Products = () => {
  const dispatch = useDispatch();

  const {products, isLoading, isError} = useSelector(
    state => state.rootReducer.product,
  );

  const {selectedCategory} = useSelector(state => state.rootReducer.category);
  console.log(selectedCategory);

  useEffect(() => {
    dispatch(getProducts(selectedCategory));
  }, [selectedCategory]);

  return (
    <View style={screenStyle.container}>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error isError={isError} />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem data={item} />}
          ListHeaderComponent={<Categories />}
          ListHeaderComponentStyle={{
            maxHeight: screenHeight * 0.09,
          }}
          showsVerticalScrollIndicator={false}
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
