import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../themes/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
