import {createStackNavigator} from "@react-navigation/stack";
import StartPage1 from "../pages/StartPage1";
import StartPage2 from "../pages/StartPage2";
import StartPage3 from "../pages/StartPage3";
import AuthPage from "../pages/AuthPage";
import {StatusBar} from "react-native";
import CreateAccount from "../pages/CreateAccount";

function ROUTES() {

    const Stack = createStackNavigator();

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Stack.Navigator initialRouteName="StartPage1" screenOptions={{
                headerShown: false
            }}>
                <>
                    <Stack.Screen name="StartPage1" component={StartPage1}/>
                    <Stack.Screen name="StartPage2" component={StartPage2}/>
                    <Stack.Screen name="StartPage3" component={StartPage3}/>
                    <Stack.Screen name="AuthPage" component={AuthPage}/>
                    <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
                        headerShown: true,
                        headerTitle: ""
                    }}/>
                </>
            </Stack.Navigator>
        </>
    );
}

export default ROUTES;