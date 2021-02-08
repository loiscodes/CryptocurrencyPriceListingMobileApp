import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CryptocurrencyDetail from './components/cryptocurrency-detail.component';
import * as api from './apis/cryptocurrency-services';

export default function App() {
  let [responseData, setResponseData] = React.useState([]);
api.getListOfCoins().then(coins => setResponseData(coins))
  return (
    <View style={styles.container}>
      <Text>Cryptocurrency</Text>
      {responseData?.map(coin => (<span key={coin.id}><CryptocurrencyDetail data={coin} /> </span>))}
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
