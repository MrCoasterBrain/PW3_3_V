import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

// Кастомный Drawer: аватарка, имя, список пунктов и кнопка выхода
export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/150?img=12' }} />
          <Text style={styles.name}>Иван Иванов</Text>
          <Text style={styles.email}>ivan@example.com</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => Alert.alert('Выход', 'Вы вышли из аккаунта')}
      >
        <Ionicons name="log-out-outline" size={22} color="#d9534f" />
        <Text style={styles.logoutText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: '#2f95dc',
    padding: 20,
    paddingTop: 50,
    marginBottom: 8,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  name: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  email: { color: '#dbeeff', fontSize: 13 },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  logoutText: { color: '#d9534f', fontSize: 16, marginLeft: 10, fontWeight: '600' },
});
