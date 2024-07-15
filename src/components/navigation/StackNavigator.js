import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = ({ transactions }) => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#3d8ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
      <Stack.Screen name="TransactionList" options={{ title: 'Transaction List' }}>
        {props => <TransactionListScreen {...props} transactions={transactions}/>}
      </Stack.Screen>

      <Stack.Screen name="TransactionDetail" options={{ title: 'Transaction Detail' }} component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
