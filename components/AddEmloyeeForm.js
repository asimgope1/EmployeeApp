import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddEmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddEmployee = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newEmployee = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      name,
      email,
      phone,
      backgroundColor:'red'

    
    };
    addEmployee(newEmployee);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
        placeholderTextColor={'grey'}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor={'grey'}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Phone"
        placeholderTextColor={'grey'}
        keyboardType="phone-pad"
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10,
  },
});

export default AddEmployeeForm;
