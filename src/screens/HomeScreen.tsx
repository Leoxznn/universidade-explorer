import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import BotaoVoltar from '../components/BotaoVoltar';
import { cursos } from '../data/cursos';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à Universidade Explorer</Text>
      <Text style={styles.subtitulo}>Escolha um curso:</Text>

      <FlatList
        data={cursos}
        keyExtractor={(curso) => curso.id}
        renderItem={({ item }) => (
          // Ao clicar num curso → tela de detalhes, passando o curso como parâmetro
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Course', { curso: item })}>
            <Text style={styles.texto}>{item.nome}</Text>
            <Text style={styles.seta}>›</Text>
          </Pressable>
        )}
      />

      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  subtitulo: { fontSize: 16, color: '#555', marginBottom: 16 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#e8f1fd',
  },
  texto: { fontSize: 18 },
  seta: { fontSize: 22, color: '#208AEF' },
});
