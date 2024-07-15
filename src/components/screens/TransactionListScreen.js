import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TransactionListScreen = ({ transactions }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={styles.transactionItem}>
              <Text style={styles.transactionSource}>{item.source}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.transactionAmount}>${item.amount}</Text>
                <FontAwesome5 name="chevron-right" size={20} color={'gray'}/>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  transactionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionSource: {
    fontSize: 18,
    fontWeight: '500',
  },
  transactionAmount: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default TransactionListScreen;
