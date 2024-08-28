import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../configs/FirebaseConfigs';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    try {
      const q = query(collection(db, 'slider'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setSliderData(data);
      // console.log(data);
    } catch (error) {
      console.log('Error fetching slider data:', error);
    }
  };

  const renderItem=({item})=>{
   return (
    <View className='pl-3' >
        <Image style={{borderRadius:16}} width={250} height={130} source={{uri:item.imgUrl}} />
        {/* <Text>{item.name}</Text> */}
    </View>
   )     
  }

  return (
    <View>
      <Text className='text-2xl px-3 font-bold text-[#6e99d2] my-3' >You May Like 😉</Text>
     
      <FlatList data={sliderData} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}  />

    </View>
  );
};

export default Slider;