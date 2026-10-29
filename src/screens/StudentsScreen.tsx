import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import BotaoVoltar from '../components/BotaoVoltar';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Students'>;

export default function StudentsScreen({ navigation, route }: Props) {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estudantes de {curso.nome}</Text>

      <FlatList
        data={curso.estudantes}
        keyExtractor={(nome) => nome}
        renderItem={({ item }) => (
          // Ao clicar num estudante → tela de perfil, passando o nome como parâmetro
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Profile', { nome: item, curso: curso.nome })}>
            <Text style={styles.texto}>👤 {item}</Text>
          </Pressable>
        )}
      />

      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 20, borderBottomWidth: 1, borderColor: '#ddd' },
  texto: { fontSize: 18 },
});
