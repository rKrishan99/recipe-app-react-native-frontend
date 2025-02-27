import { StyleSheet, Text, View } from "react-native"

const SignUpScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text>
        Sign Up Screen
      </Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default SignUpScreen; 