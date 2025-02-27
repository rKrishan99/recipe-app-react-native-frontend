import { useContext } from "react";
import { Alert, Button, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/RootNavigation";


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

interface HomeScreenProp {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen : React.FC<HomeScreenProp> = ({navigation}) => {

  const {signOut} = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you want to logout?', [
      {
        text: 'Cancel', style: 'cancel'
      },
      {
        text: 'Logout', onPress: async() => {
          await signOut();
          navigation.replace('Home');
        }
      }
    ])
  }
  
    
  return (
    <View>
        <Text>
            Home Screen
        </Text>
        <Button onPress={handleLogout} title="Logout" />
    </View>
  )
}

export default HomeScreen;