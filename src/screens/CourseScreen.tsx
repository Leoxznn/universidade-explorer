import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import BotaoVoltar from '../components/BotaoVoltar';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Course'>;

export default function CourseScreen({ navigation, route }: Props) {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{curso.nome}</Text>
      <Text style={styles.descricao}>{curso.descricao}</Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Students', { curso })}>
        <Text style={styles.textoBotao}>Ver Estudantes</Text>
      </Pressable>

      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 12 },
  descricao: { fontSize: 16, lineHeight: 24, color: '#333', marginBottom: 24 },
  botao: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#208AEF',
  },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
