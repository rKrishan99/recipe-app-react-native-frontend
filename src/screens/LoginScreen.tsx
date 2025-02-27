import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../navigation/RootNavigation";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;

interface LoginScreenProp {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProp> = ({navigation}) => {

  return (
    <View>
      <Text>
        Login Screen
      </Text>
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  )
}

export default LoginScreen;