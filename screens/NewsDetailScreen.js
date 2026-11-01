import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NEWS } from '../data/news';

export default function NewsDetailScreen({ route, navigation }) {
  // Получаем параметры, переданные при навигации
  const { id, title } = route.params;
  const article = NEWS.find((n) => n.id === id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.params}>route.params: id = {id}</Text>
      <Text style={styles.title}>{title}</Text>
      {article && (
        <>
          <Text style={styles.meta}>{article.category} · {article.date}</Text>
          <Text style={styles.text}>{article.text}</Text>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>← Назад к списку</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  params: { fontSize: 12, color: '#888', marginBottom: 12 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  meta: { fontSize: 13, color: '#2f95dc', marginBottom: 16 },
  text: { fontSize: 16, lineHeight: 24, color: '#333' },
  button: {
    marginTop: 24,
    backgroundColor: '#2f95dc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
