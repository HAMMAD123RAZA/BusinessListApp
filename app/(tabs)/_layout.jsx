import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useFonts({
  "outfit"  :require('../../assets/fonts/static/Outfit-Medium.ttf')
  })

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}>
                
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={24} name='home' color='blue' />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={24} name='search' color={color} />
          ),
        }}
      />
      <Tabs.Screen 
      name='Profile'
      options={{
        title:'Profile',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons size={24} name='people' color={color} />
        ),
              }} />

        
    </Tabs>
  );
}
