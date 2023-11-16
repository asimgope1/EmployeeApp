import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleEmployeeView = ({route}) => {
  const {employee} = route.params;
  console.log('objectttt', route.params);

  // Check if employee exists and has necessary properties before accessing them
  const employeeName = employee ? employee.name : 'N/A';
  const employeeEmail = employee ? employee.email : 'N/A';
  const employeePhone = employee ? employee.phone : 'N/A';
  const employeeManager = employee ? employee.name : 'N/A';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Details</Text>
      <View
        style={[
          styles.detailsContainer,
          {backgroundColor: employee.backgroundColor},
        ]}>
        <Text style={[styles.title]}>Name: {employeeName}</Text>
        <Text style={[styles.title]}>Email: {employeeEmail}</Text>
        <Text style={[styles.title]}>Phone: {employeePhone}</Text>
        <Text style={[styles.title]}>Manager: {employeeManager}</Text>
        {/* You might display more information here based on your data structure */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    // backgroundColor:employee.backgroundColor
  },
});

export default SingleEmployeeView;
