import { TextInput,Button,View,Text, StyleSheet } from 'react-native';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="User Name" style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
      <Button title='Sign In' onPress={() => navigation.navigate('Home')} />  
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
