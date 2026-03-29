import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ProductCard from "../components/ProductCard";
 
export default function ProductListScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const products = [
    {
      id: "1",
      name: "Aire Comprimido en Spray",
      price: 129,
      image: "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/980003475l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description:
        "Lata de aire comprimido de alta presión ideal para limpiar polvo acumulado en teclados, ventiladores, ranuras y componentes internos de tu PC sin necesidad de desmontarlos.",
    },
    {
      id: "2",
      name: "Kit de Brochas para Teclado",
      price: 89,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg-hfGUCaGmGKLT5UiTiViHXRdP_86nq7WA&s",
      description:
        "Kit de brochas antiestáticas de diferentes tamaños para limpiar entre las teclas, esquinas y superficies difíciles de tu teclado y periféricos.",
    },
    {
      id: "3",
      name: "Paños de Microfibra x5",
      price: 75,
      image: "https://m.media-amazon.com/images/I/71kFQK2BSSL._AC_SL1500_.jpg",
      description:
        "Pack de 5 paños de microfibra ultra suaves que limpian pantallas, carcasas y superficies sin dejar rayones, pelusa ni marcas de dedos.",
    },
    {
      id: "4",
      name: "Gel Limpiador de Teclado",
      price: 99,
      image: "https://m.media-amazon.com/images/I/61HgMfsTq0L._AC_SL1500_.jpg",
      description:
        "Gel limpiador flexible que se adapta a cada ranura del teclado, atrapando polvo, cabello y partículas pequeñas de forma eficaz y sin dejar residuos.",
    },
    {
      id: "5",
      name: "Líquido Limpiador de Pantalla",
      price: 149,
      image: "https://m.media-amazon.com/images/I/61bXItGSZML._AC_SL1500_.jpg",
      description:
        "Solución limpiadora especial para pantallas LED, OLED y LCD. Elimina huellas, grasa y manchas sin dañar el recubrimiento antireflejo de tu monitor.",
    },
    {
      id: "6",
      name: "Kit Completo Limpieza PC",
      price: 399,
      image: "https://m.media-amazon.com/images/I/71HgMfsTq0L._AC_SL1500_.jpg",
      description:
        "Kit completo que incluye brocha antiestática, spray de aire comprimido, paño de microfibra, gel limpiador y palillos de limpieza. Todo lo que necesitas para mantener tu PC impecable.",
    },
  ];
 
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>🧹 Limpieza para PC</Text>
      <Text style={[styles.subtitle, { color: theme.isDarkMode ? '#a0a0a0' : '#5a8fa8' }]}>Mantén tu equipo como nuevo</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf4fb",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0d5c8a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#5a8fa8",
    marginBottom: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
});