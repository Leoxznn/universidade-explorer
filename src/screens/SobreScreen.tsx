import { StyleSheet, Text, View } from 'react-native';

import BotaoVoltar from '../components/BotaoVoltar';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
      <Text style={styles.texto}>
        Universidade Explorer é um mini app para explorar cursos e estudantes, feito para praticar
        navegação, passagem de dados e organização de rotas com React Navigation.
      </Text>
      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
});
