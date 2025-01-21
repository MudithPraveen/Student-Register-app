import { Alert,TextInput,Button,View,Text, StyleSheet } from 'react-native';
import {useState} from 'react';


export default function Login({navigation}) {
  const [username,setUn] = useState('');
  const [password,setPw] = useState('');

  function handleLogin(){
    if(username && password){
      if(password.length >= 6){
        if(username === '2018ICTS75' && password === 'TS4068'){
          navigation.navigate('Home');
        }
        else{
          Alert.alert('Username or Password is incorrect!!');
        }
      }
      else{
        Alert.alert('Password must be at least 6 Characters!!');
      }
    }
    else{
      Alert.alert('Enter Username and Password!!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder="User Name" 
        style={styles.input}
        value={username}
        onChangeText={setUn}
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input}
        value={password}
        onChangeText={setPw}
      />
      <Button title='Sign In' onPress={handleLogin} />  
      <Button color='lightblue' title="Go to Sign Up" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
/*onPress={() => navigation.replace('TabNav')}*/ 
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
