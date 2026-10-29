import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import BotaoVoltar from '../components/BotaoVoltar';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Profile'>;

export default function ProfileScreen({ route }: Props) {
  // Nome do estudante recebido como parâmetro da StudentsScreen
  const { nome, curso } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.inicial}>{nome.charAt(0)}</Text>
      </View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.curso}>Estudante de {curso}</Text>

      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#208AEF',
    marginBottom: 16,
  },
  inicial: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  nome: { fontSize: 28, fontWeight: 'bold' },
  curso: { fontSize: 16, color: '#555', marginTop: 4 },
});
