import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamsList} from '../navigation/RootNavigation';
import {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'SignUp'
>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useContext(AuthContext);

  const handleSignUp = async () => {
    if (email && password) {
      const success = await signUp(email, password);
      if (success) {
      } else {
        Alert.alert('Sign Up failed!');
      }
    } else {
      Alert.alert('Invalid Input!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headrText}>Sign Up</Text>
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
      <TouchableOpacity onPress={handleSignUp} style={styles.botton}>
        <Text style={styles.bottonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
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

export default SignUpScreen;
