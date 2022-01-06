import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";


export default function WebViewComponent() {
  const url = process.env["NODE_ENV"] === 'development' ? 'http://localhost:3000' : 'https://www.alignbody.com.au'
  const insets = useSafeAreaInsets();

  const runFirst = `
                      window.isNative = true;
                      true;
                    `

  const sendInsets = () => {
    this.webview.postMessage(
      JSON.stringify({
        type: "expo:safe-area-insets",
        insets,
      })
    );
  };

  return (
    <WebView 
      originWhitelist={['*']}
      ref={(ref) => (this.webview = ref)}
      style={styles.container}
      source={{ uri: url }}
      javaScriptEnabled
      injectedJavaScript={runFirst}
      onMessage={(event) => {}} // required for injectedJavaScript
      allowsBackForwardNavigationGestures={true}
      sharedCookiesEnabled={true}
      onLoadEnd={() => {
        sendInsets();
      }}
    />
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