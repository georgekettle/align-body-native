import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WebViewComponent from './src/WebViewComponent';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
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
