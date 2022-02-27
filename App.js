import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WebViewComponent from './src/WebViewComponent';
import * as NavigationBar from 'expo-navigation-bar';
import * as Device from 'expo-device';

export default function App() {
  if (Device.osName === 'Android') {
    NavigationBar.setBackgroundColorAsync("white");
  }

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
