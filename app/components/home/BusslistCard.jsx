import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {  useRouter } from 'expo-router';

const BusslistCard = ({ item }) => {

  const router =useRouter()
  return (
    <TouchableOpacity onPress={(value)=>{router.push('/bussinessDetails/'+item.id)}} >

    <View className='bg-white rounded-lg shadow-md overflow-hidden flex-row mx-4 mt-2'>

      <Image
        source={{ uri: item.img }}
        style={{ width: 120, height: 140, borderRadius:12,  margin: 10 }}
      />
      <View className='flex-1 p-3'>
        <Text className='font-bold text-lg text-gray-900 mb-1'>{item.title}</Text>
        <Text className='text-gray-600 text-sm mb-1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat.
        </Text>
        <View className='flex-row pt-1 '>
          <Ionicons name='star' color='orange' size={18} />
          <Text className='ml-1 text-gray-800'>4.5</Text>
        </View>
      </View>

    </View>
    </TouchableOpacity>

  );
};

export default BusslistCard;
