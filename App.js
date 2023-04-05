import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Signup } from "./src/Screens/Signup/Signup";
import { Home } from "./src/Screens/Home/Home";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
