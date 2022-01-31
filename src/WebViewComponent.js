import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Linking from 'expo-linking';


export default function WebViewComponent() {
  const nativeParams = '?is_native=true'
  const url = process.env["NODE_ENV"] === 'development' ? `http://localhost:3000${nativeParams}` : `https://www.alignbody.com.au${nativeParams}`
  const insets = useSafeAreaInsets()

  const sendInsets = () => {
    this.webview.postMessage(
      JSON.stringify({
        type: "expo:safe-area-insets",
        insets,
      })
    );
  };

  const openExternalLink = (url) => {
    Linking.openURL(url.toString());
  }

  return (
    <WebView 
      originWhitelist={['*']}
      ref={(ref) => (this.webview = ref)}
      style={styles.container}
      source={{ uri: url }}
      javaScriptEnabled
      onMessage={(event) => {
        data = JSON.parse(event.nativeEvent.data)
        if (data && data["type"] === 'sendInsets') {
          sendInsets()
        }
        if (data && data["type"] === 'openExternalLink') {
          openExternalLink(data["url"])
        }
      }} // required for injectedJavaScript
      allowsBackForwardNavigationGestures={true}
      sharedCookiesEnabled={true}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});