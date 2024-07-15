import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ transactions }) => {
  const totalAmount = transactions.reduce((sum, trx) => sum + trx.amount, 0);
  const highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current), transactions[0]);
  const lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current), transactions[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalAmount.toFixed(2)}</Text>
      </View>
     
        <Text style={styles.sectionHeader}>High Spending</Text>
     
      <View style={styles.row}>
        <Text style={styles.label}>{highSpending.source}</Text>
        <Text style={styles.value}>${highSpending.amount.toFixed(2)}</Text>
      </View>
     
        <Text style={styles.sectionHeader}>Low Spending</Text>
     
      <View style={styles.row}>
        <Text style={styles.label}>{lowSpending.source}</Text>
        <Text style={styles.value}>${lowSpending.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3d8ecc',
    padding: 16,
    paddingTop: 37,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682B4',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});

export default SummaryScreen;
