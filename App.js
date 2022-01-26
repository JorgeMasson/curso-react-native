import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar />
      <Saludar firstname="Jorge" lastname="Massón" />
      <Saludar firstname="Roberto" lastname="Sediño" />
      <Saludar firstname="Rodrigo" lastname="Gaona" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
