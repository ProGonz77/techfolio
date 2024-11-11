import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
//rnfes
const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-slate-200 font-jbold">Welcome, Alumni</Text>
    <Link className="text-2xl font-pmedium" href="/home">Go to Home</Link>
    
    </View>
  )
}

export default index

