import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function CartScreen({ cart, setCart }) {
  const theme = useContext(ThemeContext);
  
  // Calculamos el total
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // Componente visual para cada producto
  const renderItem = ({ item }) => (
    <View style={[styles.productContainer, { backgroundColor: theme.colors.cardBackground }]}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: theme.colors.text }]}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price} MXN</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>​
      
      <FlatList 
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // Mensaje cuando está vacío
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyMessage, { color: theme.colors.text }]}>Tu carrito de PC Clean está vacío</Text>
            <Text style={[styles.emptySubMessage, { color: theme.isDarkMode ? '#a0a0a0' : '#7ab0c8' }]}>¡Agrega algunos productos de limpieza!</Text>
          </View>
        }
        contentContainerStyle={styles.listContainer}
      />

      <View style={[styles.footerContainer, { backgroundColor: theme.colors.cardBackground }]}>
        <View style={styles.totalContainer}>
          <Text style={[styles.totalText, { color: theme.colors.text }]}>Total a pagar:</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)} MXN</Text>
        </View>

        <TouchableOpacity 
          style={[styles.emptyButton, cart.length === 0 && styles.emptyButtonDisabled]}
          onPress={() => setCart([])}
          disabled={cart.length === 0} 
        >
          <Text style={styles.emptyButtonText}>VACIAR CARRITO</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf4fb",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 20, 
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#0d5c8a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#d6eaf8",
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d5c8a",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#1a9cd8",
    fontWeight: "700",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  emptyMessage: {
    fontSize: 18,
    color: "#5a8fa8",
    fontWeight: "bold",
    textAlign: "center",
  },
  emptySubMessage: {
    fontSize: 14,
    color: "#7ab0c8",
    marginTop: 8,
  },
  footerContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#0d5c8a",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0d5c8a",
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a9cd8",
  },
  emptyButton: {
    backgroundColor: "#e74c3c", 
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  emptyButtonDisabled: {
    backgroundColor: "#f5b7b1", 
  },
  emptyButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  }
});