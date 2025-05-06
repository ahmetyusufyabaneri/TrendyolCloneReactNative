import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../themes/colors';

const Button = ({isFill, title}) => {
  return (
    <TouchableOpacity style={!isFill ? styles.button : styles.fillButton}>
      <Text style={!isFill ? styles.title : styles.fillButtonTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  fillButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  fillButtonTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
