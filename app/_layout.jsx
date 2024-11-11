import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts} from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
        //jura fonts
        "Jura-Bold": require("../assets/fonts/Jura-Bold.ttf"),
        "Jura-Light": require("../assets/fonts/Jura-Light.ttf"),
        "Jura-Medium": require("../assets/fonts/Jura-Medium.ttf"),
        "Jura-Regular": require("../assets/fonts/Jura-Regular.ttf"),
        "Jura-SemiBold": require("../assets/fonts/Jura-SemiBold.ttf"),
      });
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
 
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}} />
        </Stack>
    )

}

export default MainLayout
