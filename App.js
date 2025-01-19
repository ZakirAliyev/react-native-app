import {NavigationContainer} from "@react-navigation/native";
import ROUTES from "./routes/ROUTES";

export default function App() {
    return (
        <NavigationContainer>
            <ROUTES/>
        </NavigationContainer>
    );
}
