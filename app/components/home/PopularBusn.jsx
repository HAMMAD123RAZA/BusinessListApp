import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/configs/FirebaseConfigs'
import PopularBussItem from './PopularBussItem'

const PopularBusn = () => {
    const [bussiness, setbussiness] = useState([])

    useEffect(()=>{
        getBusList()
    },[])

    const getBusList=async()=>{
        try {
            const q=query(collection(db,'businessList'))
            const querySnapshot=await getDocs(q)
            const data = querySnapshot.docs.map((doc) => doc.data());
            setbussiness(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem=({item})=>{
        return (
            <View>
                <PopularBussItem item={item} />
            </View>
        )
    }

  return (
    <View>
      <Text className='font-bold text-2xl py-3 pl-3' >Popular Business</Text>
      <FlatList data={bussiness} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default PopularBusn