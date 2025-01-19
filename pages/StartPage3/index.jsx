import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import start3 from "../../assets/start3.png";
import Button from "../../components/Button";

function StartPage2() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={start3}/>
            <Text style={styles.text}>Receive money from anywhere in the world</Text>
            <Button
                text={"Next"}
                backgroundColor={"#304FFE"}
                press={"AuthPage"}
                color={"white"}
                borderWidth={1}
                borderColor={"transparent"}
            />
        </View>
    );
}

export default StartPage2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
        alignSelf: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
        width: "100%",
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnText: {
        color: "white",
    },
});
