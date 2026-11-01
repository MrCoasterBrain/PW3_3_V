import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CATEGORIES } from '../data/news';

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      style={styles.list}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          // Переход во вкладку «Новости» с фильтром по категории
          onPress={() =>
            navigation.navigate('NewsTab', {
              screen: 'NewsList',
              params: { category: item.name },
            })
          }
        >
          <Ionicons name={item.icon} size={24} color="#2f95dc" />
          <Text style={styles.name}>{item.name}</Text>
          <Ionicons name="chevron-forward" size={20} color="#aaa" />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#fff' },
  item: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  name: { flex: 1, fontSize: 17, marginLeft: 14, color: '#222' },
  separator: { height: 1, backgroundColor: '#eee', marginLeft: 54 },
});
