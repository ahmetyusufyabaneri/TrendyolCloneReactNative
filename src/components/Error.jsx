import {View, Text} from 'react-native';

const Error = ({isError}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18}}>{isError}</Text>
    </View>
  );
};

export default Error;
