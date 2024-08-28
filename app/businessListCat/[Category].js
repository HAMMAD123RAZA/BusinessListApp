import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import {db} from '../../configs/FirebaseConfigs.js'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
// import { db } from '@/configs/FirebaseConfigs';
import BusslistCard from '../components/home/BusslistCard.jsx'

const BusListByCat = () => {

    const router=useRouter()

    const [cat, setCat] = useState([]);
    const navigation = useNavigation();
    const { Category } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: Category,
        });
        busListData();
    }, [Category]); 

    const busListData = async () => {
        try {
            const q = query(collection(db, 'businessList'), where('name', '==', Category));
            const qSnapShot = await getDocs(q);
            const data = qSnapShot.docs.map((doc) =>({id:doc.id, ...doc.data()}));
            setCat(data);
        } catch (error) {
            console.error('Error fetching business list:', error);
        }
    };


    return (
        <View>
            {cat.length > 0 ? (
                <FlatList
                    data={cat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <BusslistCard item={item}  />
                        </View>
                    )}
                />
            ) : (
                <Text className='text-center py-10 font-bold text-xl' >No businesses found</Text>
            )}
        </View>
    );
};

export default BusListByCat;
