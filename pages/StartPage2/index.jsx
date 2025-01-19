import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import start2 from "../../assets/start2.png";
import Button from "../../components/Button";

function StartPage2() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={start2}/>
            <Text style={styles.text}>Spend money abroad, and track your expense</Text>
            <Button
                text={"Next"}
                backgroundColor={"#304FFE"}
                press={"StartPage3"}
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
