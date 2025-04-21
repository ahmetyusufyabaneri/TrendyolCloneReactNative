import {ActivityIndicator, View} from 'react-native';
import {colors} from '../themes/colors';

const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={colors.gray} />
    </View>
  );
};

export default Spinner;
