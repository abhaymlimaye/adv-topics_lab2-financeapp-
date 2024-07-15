import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ transactions }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Transactions"
          options={{ tabBarBadge: transactions.length || 0, tabBarIcon: ({color})=> (<FontAwesome5 name="list" size={15} color={color}/>) }}>
            {() => <StackNavigator transactions={transactions}/>}
        </Tab.Screen>

        <Tab.Screen name="Summary"
          options={{ tabBarIcon: ({color})=> (<FontAwesome5 name="receipt" size={15} color={color}/>) }}>
            {() => <SummaryScreen transactions={transactions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
