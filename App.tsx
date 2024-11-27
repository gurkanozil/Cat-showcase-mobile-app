import { StyleSheet, View, Text } from 'react-native';
import Zeytin from './app/(tabs)/Zeytin';
import Huzur from './app/(tabs)/Huzur';

/**
 * The main screen of the app.
 * This component is responsible for rendering the animations (Zeytin and Huzur)
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 20 }}>Zeytin</Text>
      <Zeytin />
      <View style={{ height: 200 }} />
      <Text style={{ color: 'white', fontSize: 20 }}>Huzur</Text>
      <Huzur />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
