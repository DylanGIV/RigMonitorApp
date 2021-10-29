import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import React from 'react';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function AuthStack() {
    const theme = useSelector(state => state.theme.theme)

    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthStack;
