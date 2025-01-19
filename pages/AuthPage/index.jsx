import {View, Text, Image, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import auth1 from "../../assets/auth1.png";
import Button from "../../components/Button";

function AuthPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={auth1} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Create your Coinpay account</Text>
                <Text style={styles.text1}>Coinpay is a powerful tool that allows you to easily
                    send, receive and track all your transactions.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text={"Sign up"}
                    backgroundColor={"#304FFE"}
                    color={"white"}
                    borderWidth={1}
                    borderColor={"transparent"}
                    press={"CreateAccount"}
                />
                <Button
                    text={"Log in"}
                    backgroundColor={"white"}
                    color={"#304FFE"}
                    borderWidth={1}
                    borderColor={"#304FFE"}
                />
            </View>
            <Text style={styles.text2}>By continuing you accepting our <Text style={styles.text3}>Terms of
                Service</Text> and <Text style={styles.text3}>Privacy
                Policy</Text> .</Text>
        </View>
    );
}

export default AuthPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    textContainer: {
        gap: 10,
        alignItems: "center",
        marginVertical: 50
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    text1: {
        textAlign: "center",
        lineHeight: 20,
        color: '#6e6e6e',
        marginTop: 10
    },
    text2: {
        textAlign: "center",
        lineHeight: 20,
        color: '#6e6e6e',
        marginTop: 50,
        maxWidth: 240,
        width: '100%',
    },
    text3: {
        color: '#304FFF',
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        gap: 10, // Butonlar arasında 10 px boşluq
        width: "100%",
        alignItems: "center",
    },
});
