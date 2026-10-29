import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { HomeStackParamList, TabParamList } from './src/navigation/types';
import CourseScreen from './src/screens/CourseScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SobreScreen from './src/screens/SobreScreen';
import StudentsScreen from './src/screens/StudentsScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Pilha de telas: Home → Course → Students → Profile
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Universidade Explorer' }} />
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={({ route }) => ({ title: route.params.curso.nome })}
      />
      <Stack.Screen name="Students" component={StudentsScreen} options={{ title: 'Estudantes' }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.nome })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            title: 'Home',
            headerShown: false, // a pilha já mostra o seu próprio cabeçalho
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={SobreScreen}
          options={{ tabBarIcon: () => <Text>ℹ️</Text> }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
