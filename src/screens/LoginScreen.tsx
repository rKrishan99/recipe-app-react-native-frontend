import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamsList } from "../navigation/RootNavigation";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;

interface LoginScreenProp {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProp> = ({navigation}) => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext(AuthContext);
  
    const handleSignIn = async () => {
      if (email && password) {
        const result = await signIn(email, password);
        if (result) {
          Alert.alert('Success', 'Login successfully!');
          navigation.navigate('Home');
        } else {
          Alert.alert('Login failed!' );
        }
      } else {
        Alert.alert('Invalid Input!');
      }
    };

  return (
    <View style={styles.container}>
          <Text style={styles.headrText}>Sign In</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleSignIn} style={styles.botton}>
            <Text style={styles.bottonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headrText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  botton: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 16,
    color: '#007aff',
  },
});

export default LoginScreen;