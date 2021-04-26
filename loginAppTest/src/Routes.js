import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';


/**
 * App Screens
**/

import Splash from './Screens/Splash'
import Login from './Screens/login'
import Home from './Screens/Home'

/*End
   App Screens

  */

  const Stack = CreateStackNavigator();

const LoginAppTestNavigationStack = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
     </Stack.Navigator>
    </NavigationContainer>





        );
}
export default LoginAppTestNavigationStack;
