import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/configs/FirebaseConfigs'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryItem from '../home/CategoryItem'
import { useRouter } from 'expo-router'


const Category = () => {

    const [category, setcategory] = useState([])
    const router=useRouter()

    useEffect(()=>{
        catList()
    },[])
    
    const catList=async()=>{
        try {
            const q=query(collection(db,'category'))
            const querySnapshot=await getDocs(q)

            const data = querySnapshot.docs.map((doc) => doc.data());
            setcategory(data)
            // console.log(data)
        } catch (error) {
            console.log(error,'error here')
        }
    }

    const handlePress=(value)=>{
        router.push('/businessListCat/'+value.name)    
    }

    const renderItem=({item})=>{
        return (
                <CategoryItem item={item} onCatPress={handlePress} />
        )
    }

  return (
    <View>
    <View className='flex-row justify-between items-center mt-3  mx-3' >
      <Text className='font-bold text-2xl' >Category</Text>
      <Text className=' text-[#6e99d2] text-xl' >View All</Text>
    </View>
    <FlatList 
    // onCatPress={(category)=>router.push('/businessLisCat/'+category.name)}
    horizontal 
     showsHorizontalScrollIndicator={false}
     data={category}
      renderItem={renderItem} />
    </View>
  )
}

export default Category