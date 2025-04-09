import AppProvider from './src/providers/AppProvider';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
