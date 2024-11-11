import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )
}
const TabLayout = () => {
  return (
    <>
      <Tabs>
          <Tabs.Screen 
            name="home"
            options={{
              title:'Home',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              )
            }}
          />//end of Home Icon
        <Tabs.Screen 
            name="create"
            options={{
              title:'Create',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              )
            }}
          />//end of Create Icon
      </Tabs>
    </>
  )
}
export default TabLayout

// import { View, Text } from 'react-native'
// import React from 'react'

// const TabLayout = () => {
//   return (
//     <View>
//       <Text>TabLayout</Text>
//     </View>
//   )
// }

// export default TabLayout