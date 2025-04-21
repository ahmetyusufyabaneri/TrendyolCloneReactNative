import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {upperCase} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

import {setSelectedCategory} from '../app/slices/categorySlice';
import {colors} from '../themes/colors';

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();

  const {selectedCategory} = useSelector(state => state.rootReducer.category);

  const selectCategory = () => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <TouchableOpacity
      onPress={selectCategory}
      style={[
        styles.container,
        selectedCategory === category && styles.activeCategoryContainer,
      ]}>
      <Text
        style={[
          styles.title,
          selectedCategory === category && styles.activeTitle,
        ]}>
        {upperCase(category)}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 999,
    borderWidth: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeCategoryContainer: {
    backgroundColor: colors.primary,
    borderColor: 'transparent',
  },
  activeTitle: {
    color: colors.white,
  },
});
