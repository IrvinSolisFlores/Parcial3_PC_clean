import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function ProductDetailScreen({ route, navigation, cart, setCart }) {
  const theme = useContext(ThemeContext);
  const { name, price, image, description } = route.params;

  // Función para agregar al carrito
  const handleAddToCart = () => {
    const newProduct = { name, price, image };
    setCart([...cart, newProduct]); 
    Alert.alert("¡Éxito!", `${name} se agregó al carrito de PC Clean`);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
 
      <View style={[styles.infoContainer, { backgroundColor: theme.colors.cardBackground }]}>
        <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
        <Text style={styles.price}>${price} MXN</Text>
        
        <View style={[styles.divider, { backgroundColor: theme.isDarkMode ? '#444' : '#d6eaf8' }]} />
        
        <Text style={[styles.descriptionLabel, { color: theme.isDarkMode ? '#a0a0a0' : '#5a8fa8' }]}>Descripción</Text>
        <Text style={[styles.description, { color: theme.colors.text }]}>{description}</Text>

        {/* Botón de Agregar al Carrito */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>AGREGAR AL CARRITO</Text>
        </TouchableOpacity>

        {/* NUEVO BOTÓN: Ir a ver el Carrito */}
        <TouchableOpacity 
          style={styles.viewCartButton} 
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.viewCartButtonText}>VER MI CARRITO ({cart ? cart.length : 0})</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf4fb",
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#d6eaf8",
  },
  infoContainer: {
    margin: 16,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#0d5c8a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0d5c8a",
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    color: "#1a9cd8",
    fontWeight: "700",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#d6eaf8",
    marginBottom: 16,
  },
  descriptionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5a8fa8",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
  },
  addButton: {
    backgroundColor: "#1a9cd8", 
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24, 
    alignItems: "center",
    shadowColor: "#1a9cd8",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  viewCartButton: {
    backgroundColor: "#ffffff", 
    borderWidth: 2,
    borderColor: "#1a9cd8", 
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 12, 
    alignItems: "center",
  },
  viewCartButtonText: {
    color: "#1a9cd8", 
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  }
});