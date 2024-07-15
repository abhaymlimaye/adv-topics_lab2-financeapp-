import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Source:</Text>
      <Text style={styles.value}>{transaction.source}</Text>

      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.value}>${transaction.amount}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{transaction.location}</Text>

      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    marginBottom: 10,
    color: 'gray',
  },
});

export default TransactionDetailScreen;
