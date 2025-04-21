import {FlatList, View} from 'react-native';
import widgets from '../widgets/widgets.json';
import Widget from '../widgets/Widget';
import {screenStyle} from '../styles';

const Home = () => {
  return (
    <View style={screenStyle.container}>
      <FlatList
        data={widgets}
        renderItem={({item}) => <Widget item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
