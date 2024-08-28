// components/Header.js
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import img from '../../../assets/images/react-logo.png';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className='py-8 px-4 bg-[#6e99d2]' >
    <View className='flex-row gap-2 items-center 
    ' >
      <Image source={{uri:'https://img.freepik.com/free-vector/creative-nerd-logo-template_23-2149218771.jpg?w=740&t=st=1724701614~exp=1724702214~hmac=ccf1b9fd6d09e967973e46ae10eb562a47a5d626ae1a6b4f5e0e650464bc35ba'}} style={{ width: 60, height: 60, marginRight: 10 ,borderRadius:123 }} />
      <View>
        <Text className='font-bold text-white text-2xl ' style={{fontFamily:'outfit'}} >Welcome</Text>
        <Text className='font-bold text-white text-2xl' style={{fontFamily:'SpaceMono'}} >Business family</Text>
      </View>
      </View>

      {/* Search */}
      <View className='flex flex-row items-center bg-gray-200 rounded-md mt-12 p-3  '>
                    <Ionicons name='search' size={24} />
                    <TextInput placeholder='Search...' className='flex-1 ml-3' />
                </View>
                    </View>
  );
};

export default Header;
