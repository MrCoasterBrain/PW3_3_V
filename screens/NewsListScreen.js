import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NEWS } from '../data/news';

export default function NewsListScreen({ navigation, route }) {
  // Если пришли из «Категорий» — фильтруем по выбранной категории
  const category = route.params?.category;
  const data = category ? NEWS.filter((n) => n.category === category) : NEWS;

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text style={styles.empty}>Новостей пока нет</Text>}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.6}
          // Передача параметров на экран деталей
          onPress={() =>
            navigation.navigate('NewsDetail', { id: item.id, title: item.title })
          }
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.category}>{item.category} · {item.date}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#aaa" />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#fff' },
  item: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  separator: { height: 1, backgroundColor: '#eee', marginLeft: 16 },
  category: { fontSize: 12, color: '#2f95dc', marginBottom: 4 },
  title: { fontSize: 16, fontWeight: '600', color: '#222' },
  empty: { textAlign: 'center', marginTop: 40, color: '#888' },
});
