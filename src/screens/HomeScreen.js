import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function HomeScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  
  // Primeros 4 productos del catálogo
  const products = [
    {
      id: "1",
      name: "Aire Comprimido en Spray",
      price: 129,
      image: "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/980003475l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      description: "Lata de aire comprimido de alta presión ideal para limpiar polvo acumulado en teclados, ventiladores, ranuras y componentes internos de tu PC sin necesidad de desmontarlos.",
    },
    {
      id: "2",
      name: "Kit de Brochas para Teclado",
      price: 89,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg-hfGUCaGmGKLT5UiTiViHXRdP_86nq7WA&s",
      description: "Kit de brochas antiestáticas de diferentes tamaños para limpiar entre las teclas, esquinas y superficies difíciles de tu teclado y periféricos.",
    },
    {
      id: "3",
      name: "Paños de Microfibra x5",
      price: 75,
      image: "https://m.media-amazon.com/images/I/71kFQK2BSSL._AC_SL1500_.jpg",
      description: "Pack de 5 paños de microfibra ultra suaves que limpian pantallas, carcasas y superficies sin dejar rayones, pelusa ni marcas de dedos.",
    },
    {
      id: "4",
      name: "Gel Limpiador de Teclado",
      price: 99,
      image: "https://m.media-amazon.com/images/I/61HgMfsTq0L._AC_SL1500_.jpg",
      description: "Gel limpiador flexible que se adapta a cada ranura del teclado, atrapando polvo, cabello y partículas pequeñas de forma eficaz y sin dejar residuos.",
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} showsVerticalScrollIndicator={false}>

      {/* ── HEADER ── */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/pc clean.jpg")}
          style={styles.logo}
        />
        <Text style={styles.brandName}>PC CLEAN</Text>
        <Text style={styles.brandTagline}>E-Commerce Technology</Text>
      </View>

      {/* ── BANNER PRINCIPAL ── */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: "https://picsum.photos/seed/pcclean/800/400" }}
          style={styles.banner}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>🧹 ¡Limpia tu PC!</Text>
          <Text style={styles.bannerSubtitle}>Productos profesionales para tu equipo</Text>
        </View>
      </View>

      {/* ── PRODUCTOS DESTACADOS ── */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Productos Destacados</Text>
        <View style={styles.sectionLine} />
      </View>

      <View style={styles.productsGrid}>
        {products.map((product) => (
          <TouchableOpacity 
            key={product.id} 
            style={[styles.productCard, { backgroundColor: theme.colors.cardBackground }]}
            onPress={() =>
              navigation.navigate("ProductDetail", {
                name: product.name,
                price: product.price,
                image: product.image,
                description: product.description,
              })
            }
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={[styles.productName, { color: theme.colors.text }]} numberOfLines={2}>
              {product.name}
            </Text>
            <Text style={styles.productPrice}>${product.price} MXN</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── SEGUNDO BANNER ── */}
      <View style={styles.banner2Container}>
        <Image
          source={{ uri: "https://picsum.photos/seed/tech-clean/800/300" }}
          style={styles.banner2}
        />
        <View style={styles.banner2Overlay}>
          <Text style={styles.banner2Text}>🔥 Oferta del mes — 20% OFF</Text>
          <Text style={styles.banner2Sub}>En kits de limpieza completos</Text>
        </View>
      </View>

      {/* ── BOTÓN CATÁLOGO ── */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Ver catálogo completo →</Text>
      </TouchableOpacity>

      {/* ── FOOTER ── */}
      <Text style={styles.footer}>So easy</Text>

    </ScrollView>
  );
}

const NAVY = "#1A2B5E";
const NAVY_LIGHT = "#2D4499";
const ACCENT = "#4A90D9";
const BG = "#F4F7FB";
const WHITE = "#FFFFFF";
const GRAY = "#8A9BBE";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: BG,
  },

  /* HEADER */
  header: {
    backgroundColor: NAVY,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: NAVY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 10,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginBottom: 10,
  },
  brandName: {
    color: WHITE,
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 5,
  },
  brandTagline: {
    color: ACCENT,
    fontSize: 12,
    letterSpacing: 3,
    marginTop: 2,
    textTransform: "uppercase",
  },

  /* BANNER PRINCIPAL */
  bannerContainer: {
    marginHorizontal: 18,
    marginTop: 24,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  banner: {
    width: "100%",
    height: 190,
  },
  bannerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(26,43,94,0.72)",
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  bannerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "800",
  },
  bannerSubtitle: {
    color: ACCENT,
    fontSize: 13,
    marginTop: 2,
  },

  /* SECCIÓN PRODUCTOS */
  sectionHeader: {
    marginHorizontal: 18,
    marginTop: 30,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: NAVY,
    letterSpacing: 0.5,
  },
  sectionLine: {
    height: 3,
    width: 48,
    backgroundColor: ACCENT,
    borderRadius: 4,
    marginTop: 6,
  },

  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    marginTop: 14,
    justifyContent: "space-between",
  },
  productCard: {
    width: "47%",
    backgroundColor: WHITE,
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    shadowColor: NAVY,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E8EEF8",
  },
  productImage: {
    width: "100%",
    height: 120,
    backgroundColor: "#EAF1FB",
  },
  productEmojiBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EAF1FB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productEmoji: {
    fontSize: 28,
  },
  productName: {
    fontSize: 13,
    fontWeight: "700",
    color: NAVY,
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 8,
    paddingTop: 12,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "900",
    color: ACCENT,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

  /* SEGUNDO BANNER */
  banner2Container: {
    marginHorizontal: 18,
    marginTop: 8,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  banner2: {
    width: "100%",
    height: 140,
  },
  banner2Overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(45,68,153,0.75)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  banner2Text: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "800",
  },
  banner2Sub: {
    color: "#B8D4F5",
    fontSize: 13,
    marginTop: 4,
  },

  /* BOTÓN */
  button: {
    backgroundColor: NAVY,
    marginHorizontal: 18,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: NAVY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    color: GRAY,
    fontSize: 11,
    marginTop: 28,
    marginBottom: 32,
    letterSpacing: 0.5,
  },
});