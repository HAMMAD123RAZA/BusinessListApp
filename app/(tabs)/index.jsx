import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Slider from '../components/home/Slider'
import Category from '../components/home/Category'
import PopularBusn from '../components/home/PopularBusn'

const index = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View>
        {/* header */}
    <Header/>
        {/* slider  */}
<Slider/>
        {/* category */}
<Category/>
        {/* business  */}
        <PopularBusn/>
    </View>
    </ScrollView>

  )
}

export default index