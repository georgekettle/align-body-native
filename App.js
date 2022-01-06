import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WebViewComponent from './src/WebViewComponent';



export default function App() {
  console.log('is dev?', __DEV__)
  console.log('process.env:', process.env["NODE_ENV"]);
  return (
    <SafeAreaProvider>
      <WebViewComponent/>
    </SafeAreaProvider>
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
