import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../app/actions/productAction';
import {screenStyle} from '../styles';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import {screenHeight, screenWidth} from '../constants';
import {colors} from '../themes/colors';
import {Star} from 'iconsax-react-native';
import {convertPrice} from '../utils/convertPrice';
import LocationCard from '../components/LocationCard';
import Button from '../components/Button';

const ProductDetail = () => {
  const {id} = useRoute()?.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  const {product, isLoading, isError} = useSelector(
    state => state.rootReducer.productDetail,
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={screenStyle.container}>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Error />
        ) : (
          <View style={{flex: 1}}>
            <ScrollView>
              <Image source={{uri: product?.image}} style={styles.image} />
              <Text style={styles.title}>{product?.title}</Text>
              <View style={styles.categoryContainer}>
                <Text style={styles.category}>{product?.category}</Text>
                <View style={styles.rateContainer}>
                  <Star size={24} color={colors.yellow} variant="Bold" />
                  <Text style={styles.rate}>{product?.rating?.rate}</Text>
                </View>
              </View>
              <Text style={styles.description}>{product?.description}</Text>
              <LocationCard />
            </ScrollView>
            <View style={styles.bottom}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{convertPrice(product?.price)}</Text>
                <Text style={styles.text}>Free Shipping!</Text>
              </View>
              <View style={styles.buttons}>
                <Button isFill={false} title="Buy Now" />
                <Button isFill title="Add to Cart" />
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight * 0.3,
    resizeMode: 'contain',
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    color: colors.gray,
    fontSize: 15,
    fontWeight: '700',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rate: {
    fontSize: 15,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 12,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceContainer: {
    gap: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    color: colors.green,
    fontSize: 16,
    fontWeight: '500',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
});
