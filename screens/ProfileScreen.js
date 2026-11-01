import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/150?img=12' }} />
      <Text style={styles.name}>Иван Иванов</Text>
      <Text style={styles.position}>Frontend разработчик</Text>
      <Text style={styles.email}>ivan@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: 'bold' },
  position: { fontSize: 16, color: '#636363', marginTop: 4 },
  email: { fontSize: 14, color: '#2f95dc', marginTop: 8 },
});
