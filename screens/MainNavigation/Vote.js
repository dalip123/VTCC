import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

class Vote extends React.Component {
render(){
  return (
    <View style={styles.container}>
    <Text>Hello,  Voters!!</Text>
    </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Vote
