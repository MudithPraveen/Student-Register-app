import { ScrollView,Alert,TextInput,Button,View,Text, StyleSheet } from 'react-native';
import {useState,useContext} from 'react';
import { CounterContext } from './CounterProvider';
import {useForm,Controller} from 'react-hook-form'

export default function Login({navigation}) {
  const { users } = useContext(CounterContext);
  const {control,handleSubmit,formState:{ errors }} = useForm();

  function handleLogin(data){
    const userCheck = users.find(
      (item) => item.un === data.username && item.pw === data.password
    )

    if(userCheck){
      navigation.navigate('Home');
    }
    else{
      Alert.alert('User name or password incorrect!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Controller
        name = "username"
        control = {control}
        rules = {{required:"User name required!"}}
        render = {({ field: {onChange, value  } })=>(
          <TextInput 
            placeholder = "Username"
            style = {styles.input}
            value = {value}
            onChangeText = {onChange}
          />
        )}
      />
      {errors.username && <Text style = {styles.error}> {errors.username.message} </Text>}

      <Controller 
        name = "password"
        control = {control}
        rules = {{required:"Password required!", minLength:{value: 6 ,message:"Password must be at least 6 characters"}}}
        render = {({ field: { value , onChange } })=>(
          <TextInput
            placeholder = "Password"
            style = {styles.input}
            value = {value}
            onChangeText = {onChange}
          />
        )}
      />
      {errors.password && <Text style = {styles.error} > {errors.password.message} </Text>}

      <Button title='Sign In' onPress={handleSubmit(handleLogin)} />  

      <Button color='lightblue' title="Go to Sign Up" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
/*onPress={() => navigation.replace('TabNav')}*/ 
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
