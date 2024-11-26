import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Add from "./src/screens/Add/add";
import Home from './src/screens/home/home';

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AddTreino' component={Add}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}