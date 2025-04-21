import {FlatList, View} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../app/actions/categoryAction';
import {screenStyle} from '../styles';
import CategoryItem from '../components/CategoryItem';

const Categories = () => {
  const dispatch = useDispatch();

  const {categories} = useSelector(state => state.rootReducer.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={[screenStyle.container, {paddingHorizontal: 0}]}>
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
        horizontal
        contentContainerStyle={{marginVertical: 16, gap: 8}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
