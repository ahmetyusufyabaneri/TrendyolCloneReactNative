import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../constants';
import {colors} from '../themes/colors';
import {Star} from 'iconsax-react-native';

const ProductItem = ({data}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri: data.image}}
        style={{
          width: '100%',
          height: screenHeight * 0.15,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text numberOfLines={2} style={styles.title}>
        {data.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text>{data.price}$</Text>
        <View style={styles.rateContainer}>
          <Star size={24} color={colors.yellow} variant="Bold" />
          <Text>{data.rating.rate}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.45,
    margin: 4,
    padding: 4,
    borderWidth: 0.2,
    borderColor: colors.gray,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
