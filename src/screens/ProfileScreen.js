import { View, Text, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ProfileScreen() {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>​
      <Image
        source={require("../../assets/pc clean.jpg")}
        style={styles.image}
      />
      <Text style={[styles.name, { color: theme.colors.text }]}>Usuario PC Clean</Text>
      <Text style={[styles.email, { color: theme.isDarkMode ? '#a0a0a0' : '#666' }]}>usuario@pcclean.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
});