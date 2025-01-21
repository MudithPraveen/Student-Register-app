import { Button,View,Text,StyleSheet} from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Add Student" onPress={() => navigation.navigate('Add')} />
      <Button title="View Student" onPress={() => navigation.navigate('View')} />
      <Button color='red' title="Logout" onPress={() => navigation.navigate('Login') } />
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
  title:{
    fontSize: 40,
    color:'blue',
    fontWeight:'bold',
    bottom:100
  },
});