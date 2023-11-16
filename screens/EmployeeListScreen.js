// EmployeeListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchEmployees } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import EmployeeCard from '../components/EmployeeCard';
import AddEmployeeForm from '../components/AddEmloyeeForm';

const EmployeeListScreen = () => {
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isListView, setIsListView] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View
    style={{
        flex: 1,
      
    }}
    >
      {isListView ? (
        <View
        style={{
           height:'100%'
        }}
        >
          <AddEmployeeForm addEmployee={addEmployee} />
          <FlatList
            data={employees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedEmployee(item);
                  console.log("object",item)
                  navigation.navigate('SingleEmployee', { employee: item });
                }}
              >
                <EmployeeCard employee={item} />
              </TouchableOpacity>
            )}

            ListFooterComponent={
               <View
               style={{
                    height: 100,
                    width: '100%',
               }}
               >

               </View>
            }
          />
        </View>
      ) : (
        <View>
          {/* Render SingleEmployeeView here if needed */}
        </View>
      )}
    </View>
  );
};

export default EmployeeListScreen;
