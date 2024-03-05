import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App executed");

  console.log("hello world")

  return (

    <View style={styles.container}>
      <Text>Scotties Crib</Text>
      <StatusBar style="auto" />
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
