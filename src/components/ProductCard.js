
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
 
export default function ProductCard({ name, price, image, description, navigation }) {
  const theme = useContext(ThemeContext);
  
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          name: name,
          price: price,
          image: image,
          description: description,
        })
      }
    >
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={[styles.productName, { color: theme.colors.text }]}>{name}</Text>
        <Text style={styles.productPrice}>${price} MXN</Text>
      </View>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#0d5c8a",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#d6eaf8",
  },
  infoContainer: {
    padding: 14,
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0d5c8a",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#1a9cd8",
    fontWeight: "600",
  },
});