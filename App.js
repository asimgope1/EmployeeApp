import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeListScreen from './screens/EmployeeListScreen';
import SingleEmployeeView from './components/SingleEmployeeView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeList">
        <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
        <Stack.Screen name="SingleEmployee" component={SingleEmployeeView} />

        {/* Add screens for other features if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
