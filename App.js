import React, { useState } from 'react';
import { Text } from 'react-native';
import TabNavigator from './src/components/navigation/TabNavigator'

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: '1', source: 'Walmart', amount: 50, location: 'North York, ON', date: '2023-07-01' },
    { id: '2', source: 'Starbucks', amount: 1000, location: 'Toronto, ON', date: '2023-07-02' },
    { id: '3', source: 'Utilities', amount: 200, location: 'Mississauga, ON', date: '2023-07-03' },
    { id: '4', source: 'Groceries', amount: 150, location: 'Scarborough, ON', date: '2023-07-04' },
    { id: '5', source: 'Amazon', amount: 250, location: 'Brampton, ON', date: '2023-07-05' },
    { id: '6', source: 'Netflix', amount: 15, location: 'Richmond Hill, ON', date: '2023-07-06' },
    { id: '7', source: 'Gym', amount: 70, location: 'Oakville, ON', date: '2023-07-07' },
    { id: '8', source: 'Gas', amount: 60, location: 'Etobicoke, ON', date: '2023-07-08' },
    { id: '9', source: 'Restaurant', amount: 80, location: 'Hamilton, ON', date: '2023-07-09' },
    { id: '10', source: 'Insurance', amount: 300, location: 'London, ON', date: '2023-07-10' },
    { id: '11', source: 'Tim Hortons', amount: 7.89, location: 'Waterloo, ON', date: '2023-07-11' },
    { id: '12', source: 'Nike', amount: 250, location: 'Guelph, ON', date: '2023-07-12' },
  ]);
  

  return (
    <TabNavigator transactions={transactions} />
  );
}


