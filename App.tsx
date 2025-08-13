import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';

import MainTabs from './src/components/MainTabs'

const Stack = createStaticNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Maintabs"
        component={Maintabs}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
        />

        <Settings.Screen
        name="MovieDetailsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
