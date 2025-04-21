import {View, FlatList} from 'react-native';
import WidgetTitle from './WidgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import {useEffect} from 'react';
import {getProducts} from '../app/actions/productAction';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const BestSellers = ({item}) => {
  const dispatch = useDispatch();

  const {products, isLoading, isError} = useSelector(
    state => state.rootReducer.product,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View>
      <WidgetTitle title={item.title} seeAll={item.seeAll} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default BestSellers;
