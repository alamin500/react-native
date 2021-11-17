
import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://stark-caverns-04377.herokuapp.com/doctors')
      .then(res => res.json())
    .then(data => setDoctors(data))
  },[])
 return (
  <View>
   <Text>This is Doctors: {doctors.length}</Text>
   <ScrollView>
   {
    doctors.map(doctor => <Doctor
     key={doctor._id}
    doctor={doctor}
    ></Doctor>)
   }
   </ScrollView>
  </View>
 )
}
