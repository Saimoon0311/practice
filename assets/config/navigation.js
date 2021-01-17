import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screen/home';
import About from '../screen/about';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Hello" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
    );
}