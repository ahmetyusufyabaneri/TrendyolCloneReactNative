import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowRight2, Location} from 'iconsax-react-native';
import {colors} from '../themes/colors';

const LocationCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View>
          <Location size={32} color="#FF8A65" />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Drottninggatan St.</Text>
          <Text style={styles.address}>32-000, Stockholm</Text>
        </View>
      </View>
      <View style={styles.right}>
        <ArrowRight2 size={36} color="#FF8A65" />
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 28,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  addressContainer: {
    gap: 4,
  },
  address: {
    fontSize: 16,
    fontWeight: '500',
  },
  right: {},
});
