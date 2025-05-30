import {Provider} from 'react-redux';
import {store} from '../app/store';

const AppProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
