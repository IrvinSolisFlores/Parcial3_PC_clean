import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  // Obtenemos el contexto del tema
  const theme = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Configuración
      </Text>

      {/* Opción 1: Tema Oscuro */}
      <View style={[styles.settingRow, { borderBottomColor: theme.colors.border }]}>
        <Text style={[styles.settingText, { color: theme.colors.text }]}>
          Modo Oscuro
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={theme.isDarkMode ? '#0056b3' : '#f4f3f4'}
          onValueChange={theme.toggleTheme}
          value={theme.isDarkMode}
        />
      </View>

      {/* Opción 2: Notificaciones */}
      <View style={[styles.settingRow, { borderBottomColor: theme.colors.border }]}>
        <Text style={[styles.settingText, { color: theme.colors.text }]}>
          Recibir Notificaciones
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={notificationsEnabled ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  settingText: {
  }
});