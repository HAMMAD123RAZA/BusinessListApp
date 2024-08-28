import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <View className='text-center px-10 py-10' >
      <Image source={{uri:'https://s3-alpha.figma.com/hub/file/4132515634/557a6326-3481-4012-a310-a4c07f04c7fb-cover.png'}} width={100} height={70} />

      </View>
      {/* content */}
    <View>
    <Text style={{fontFamily:'outfit'}} className='font-bold text-2xl'  >Your Ultimate <Text className='text-purple-600' >Community Business Directory</Text>  App</Text>
    <Text className='px-6 py-4 text-center' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sapiente assumenda pariatur temporibus, harum nihil iure unde quae quas, neque, optio dolor debitis vel possimus. In iste non architecto ratione!</Text>
    </View>

    <TouchableOpacity>
    <Text className='max-w-sm px-6 py-3 rounded-lg  bg-purple-600 text-white font-bold ' >Lets Get Started</Text>
    </TouchableOpacity>

    </View>
  )
}

export default LoginScreen