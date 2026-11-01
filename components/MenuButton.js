import { TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Кнопка-«гамбургер»: открывает Drawer из любого вложенного экрана
export default function MenuButton({ color = '#2f95dc' }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={{ paddingHorizontal: 12 }}
    >
      <Ionicons name="menu" size={26} color={color} />
    </TouchableOpacity>
  );
}
