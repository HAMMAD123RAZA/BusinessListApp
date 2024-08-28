import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import Intro from '../components/bussDetScreen/Intro'


const BusinessId = () => {
  const { BussinessId } = useLocalSearchParams();
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    if (BussinessId) {
      getData();
    } else {
      console.log('BussinessId is undefined');
    }
  }, [BussinessId]);

  const getData = async () => {
    try {
      const docRef = doc(db, 'businessList', BussinessId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setBusinessData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log('Error fetching document:', error);
    }
  };

  return (
    <View  >
      {/* intro */}
        <Intro businessData={businessData} />
        {/* action buttons */}

        {/* About sec */}
    </View>
  );
};

export default BusinessId;
