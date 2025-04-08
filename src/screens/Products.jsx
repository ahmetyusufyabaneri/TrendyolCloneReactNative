import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getRequest} from '../services/requests';
import {productUrls} from '../services/urls';

const Products = () => {
  useEffect(() => {
    getRequest(productUrls.allProducts)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
