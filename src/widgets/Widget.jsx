import Categories from './Categories';
import BestSellers from './BestSellers';
import ForYou from './ForYou';
import Introduction from './Introduction';

const Widget = ({item}) => {
  switch (item.name) {
    case 'categories':
      return <Categories item={item} />;

    case 'introduction':
      return <Introduction item={item} />;

    case 'bestSellers':
      return <BestSellers item={item} />;

    case 'forYou':
      return <ForYou item={item} />;

    default:
      break;
  }
};

export default Widget;
