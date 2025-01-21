import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CounterProvider } from './Screens/CounterProvider';
import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Add from './Screens/Add';
import ViewStu from './Screens/ViewStu'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <CounterProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='View' component={ViewStu} />
      </Stack.Navigator>
    </NavigationContainer>
    </CounterProvider>
  );
}

/*
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
<Stack.Screen name='TabNav' component={TabNav} options={{headerShown:false}}/>
export function TabNav() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Add Student" component={Add} />
    <Tab.Screen name="View Student" component={ViewStu} />
  </Tab.Navigator>
  );
}*/