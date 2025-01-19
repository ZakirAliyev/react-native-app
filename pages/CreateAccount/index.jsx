import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.subtitle}>Enter your mobile number to verify your account</Text>

                <Text style={styles.label}>Phone</Text>
                <View style={styles.phoneInputWrapper}>
                    <TextInput
                        style={styles.countryCodeInput}
                        placeholder="+1"
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={styles.phoneNumberInput}
                        placeholder="Mobile number"
                        keyboardType="phone-pad"
                    />
                </View>

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="* * * * * * * *"
                    secureTextEntry
                />
            </View>

            <Button
                backgroundColor="#304FFE"
                color="white"
                text="Sign up"
                borderColor="transparent"
                borderWidth={1}
                onPress={() => navigation.navigate("Home")} // Adjust as per your navigation structure
            />
        </View>
    );
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 40
    },
    form: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#5A5A5A",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: "#5A5A5A",
        marginBottom: 8,
        marginTop: 5,
    },
    phoneInputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    countryCodeInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#B8B8B8",
        paddingHorizontal: 12,
        paddingVertical: 10,
        width: "25%",
        marginRight: 10,
    },
    phoneNumberInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#B8B8B8",
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    passwordInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#B8B8B8",
        paddingHorizontal: 12,
        paddingVertical: 10,
        width: "100%",
        marginBottom: 20,
    },
});
