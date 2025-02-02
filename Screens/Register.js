import { Alert,TextInput,Button,View,Text, StyleSheet } from 'react-native';
import {useContext,useState} from 'react';
import { CounterContext } from './CounterProvider';
import {Controller,useForm} from 'react-hook-form'


export default function Register({navigation}) {
  const { addUsers } = useContext(CounterContext);
  const { control,handleSubmit,formState:{errors}} = useForm();

  function handleReg(data){
    addUsers(data.username,data.email,data.password);
    navigation.navigate('Login')
  }
  
  return (
    <View  style={styles.container}>
      <Text  style={styles.title}>Register</Text>

      <Controller 
        name = "username"
        control = {control}
        rules = {{required:"username required!"}}
        render = {({field:{onChange,value}}) => (
          <TextInput 
            placeholder = "username"
            value = {value}
            onChangeText = {onChange}
            style={styles.input}
          />
        )}
      />
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

      <Controller 
        name = "email"
        control = {control}
        rules = {{required:"Email required!" ,pattern:{ value:/^\S+@\S+\.\S+$/ , message:"Invalid email format!" }}}
        render = {({field:{onChange,value}})=>(
          <TextInput
            placeholder = "Email"
            value = {value}
            onChangeText = {onChange}
            style = {styles.input}
          />
        )}
      />
      {errors.email && <Text style = {styles.error}>{errors.email.message}</Text>}

      <Controller 
        name = "password"
        control = {control}
        rules = {{required:"password required!" ,minLength :{value:6 ,message:"Password must be at least 6 characters"}}}
        render = {({field:{onChange,value}})=>(
          <TextInput
            placeholder = "password"
            value = {value}
            onChangeText = {onChange}
            secureTextEntry
            style = {styles.input}
          />
        )}
      />
      {errors.password && <Text style = {styles.error}>{errors.password.message}</Text>}

      <Button title="Register" onPress={handleSubmit(handleReg)} />
    </View>
  );
}

const styles = StyleSheet.create({
  error:{
    color: 'red',
    marginBottom: 5,
  },
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