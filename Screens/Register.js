import { Alert,TextInput,Button,View,Text, StyleSheet } from 'react-native';
import {useContext,useState} from 'react';
import { CounterContext } from './CounterProvider';


export default function Register({navigation}) {
  const [un,setUn] = useState('');
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const { addUsers } = useContext(CounterContext);

  function handleReg(){
    if(un && email && pw){
    addUsers(un,email,pw);
    setUn('');
    setPw('');
    setEmail('');
    navigation.navigate('Login')
    }
    else{
      Alert.alert('Enter User Details!');
    }
  }
  

  return (
    <View  style={styles.container}>
      <Text  style={styles.title}>Register</Text>
       <TextInput 
        placeholder="Username" 
        style={styles.input}
        value = {un}
        onChangeText = {setUn}
       />
       <TextInput 
        placeholder="Email" 
        style={styles.input}
        value = {email}
        onChangeText = {setEmail}
        />
       <TextInput 
       placeholder="Password" 
       secureTextEntry 
       style={styles.input}
       value = {pw}
       onChangeText = {setPw}
       />
      <Button title="Register" onPress={handleReg} />
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