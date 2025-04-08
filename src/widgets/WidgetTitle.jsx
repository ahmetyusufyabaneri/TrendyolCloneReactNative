import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../types/screenNames';

const WidgetTitle = ({title, seeAll}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Products)}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WidgetTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  seeAll: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});
