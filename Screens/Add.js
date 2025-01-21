import { StyleSheet,TextInput, Button, View, Text, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { CounterContext } from './CounterProvider';

export default function Add({ navigation }) {
  const [rgno, setRgno] = useState('');
  const [name, setName] = useState('');
  const { addStudent } = useContext(CounterContext);

  function studentAdding(){
    if (name && rgno) {
      addStudent(rgno, name);
      Alert.alert('Success', 'Student added successfully');
      setRgno('');
      setName('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Add Student</Text>
      <TextInput 
        placeholder="Enter Register Number"
        value={rgno}
        onChangeText={setRgno}
         style={styles.input}
      />
      <TextInput 
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Add Student" onPress={studentAdding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
    gap:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 5,
  },
  title:{
    fontSize: 40,
    color:'blue',
    fontWeight:'bold',
    bottom:100
  },
});