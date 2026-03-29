import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

// Importaciones de tus pantallas
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack de Home con las pantallas de productos y Configuración
function HomeStack({ cart, setCart }) {
  const theme = useContext(ThemeContext);
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.isDarkMode ? '#2A2A2A' : '#FFFFFF',
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          color: theme.colors.text,
        },
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={({ navigation }) => ({ 
          title: "Inicio",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Configuracion")}>
              <Ionicons name="settings-outline" size={26} color={theme.colors.text} style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
        })} 
      />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Productos" }} />
      <Stack.Screen name="ProductDetail" options={{ title: "Detalle del producto" }}>
        {(props) => <ProductDetailScreen {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
      
      <Stack.Screen name="Configuracion" component={SettingsScreen} options={{ title: "Configuración" }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Inicio") {
              iconName = "home";
            } else if (route.name === "Carrito") {
              iconName = "cart";
            } else if (route.name === "Perfil") {
              iconName = "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1a1a2e",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: theme.colors.tabBar,
            borderTopColor: theme.isDarkMode ? '#444' : '#ddd',
          },
        })}
      >
        <Tab.Screen name="Inicio" options={{ headerShown: false }}>
          {() => <HomeStack cart={cart} setCart={setCart} />}
        </Tab.Screen>

        <Tab.Screen name="Carrito">
          {(props) => <CartScreen {...props} cart={cart} setCart={setCart} />}
        </Tab.Screen>

        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}