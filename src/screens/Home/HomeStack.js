import { createStackNavigator, Header } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import React from 'react';
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();

function HomeStack(props) {
    const theme = useSelector(state => state.theme.theme)

    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default HomeStack;
