import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardList from "./components/CardList";
import colors from "./assets/colors/colors";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.appBody}>
        <CardList></CardList>
      </View>
      <StatusBar style="auto" />
      {/* oculta la barra de arriba */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  appBody: {
    flex: 20,
  },
});
