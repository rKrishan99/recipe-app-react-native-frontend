import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type RootStackParamsList = {
    Login: undefined;
    SignUp: undefined;
    Home: undefined;
    RecipeDetails: { recipeId: string }
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default RootNavigation;