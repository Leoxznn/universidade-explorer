import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function BotaoVoltar() {
  const navigation = useNavigation();

  // Na primeira tela não há para onde voltar, por isso o botão não aparece
  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
      <Text style={styles.texto}>← Voltar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#6c757d',
  },
  texto: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
