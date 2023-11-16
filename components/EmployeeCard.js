import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee }) => {
  return (
    <View style={[styles.card, { backgroundColor: employee.backgroundColor }]}>
      <Text>Name: {employee.name}</Text>
      <Text>Email: {employee.email}</Text>
      <Text>Phone: {employee.phone}</Text>
      <Text>Manager: {employee.name}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 8,
    marginBottom:10,
  },
});

export default EmployeeCard;
