import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import MenuButton from '../components/MenuButton';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#2f95dc',
        headerTitleStyle: { color: '#222' },
      }}
    >
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{ title: 'Новости', headerLeft: () => <MenuButton /> }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        // Заголовок берём из переданных параметров
        options={({ route }) => ({ title: route.params.title, headerBackTitle: 'Назад' })}
      />
    </Stack.Navigator>
  );
}
