import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CryptocurrencyDetail(props) {
  const {data} = props;
  return (
    <View style={styles.container}>
      <Text>Name: {data.name}</Text>
      <Text>Price: {data.price_usd}</Text>

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
