import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuButton from '../components/MenuButton';

const Tab = createBottomTabNavigator();

const ICONS = {
  NewsTab: { active: 'newspaper', inactive: 'newspaper-outline' },
  Categories: { active: 'list', inactive: 'list-outline' },
  Profile: { active: 'person', inactive: 'person-outline' },
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? ICONS[route.name].active : ICONS[route.name].inactive}
            size={size}
            color={color}
          />
        ),
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
        headerLeft: () => <MenuButton />,
      })}
    >
      {/* У вкладки «Новости» свой заголовок даёт Stack */}
      <Tab.Screen
        name="NewsTab"
        component={StackNavigator}
        options={{ title: 'Новости', headerShown: false }}
      />
      <Tab.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Категории' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
    </Tab.Navigator>
  );
}
