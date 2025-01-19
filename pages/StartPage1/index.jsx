import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import start1 from "../../assets/start1.png";
import Button from "../../components/Button";

function StartPage1() {
    const navigation = useNavigation();

    return (
            <View style={styles.container}>
                <Image source={start1}/>
                <Text style={styles.text}>Trusted by millions of people, part of one part</Text>
                <Button
                    text={"Next"}
                    backgroundColor={"#304FFE"}
                    press={"StartPage2"}
                    color={"white"}
                    borderWidth={1}
                    borderColor={"transparent"}
                />
            </View>
    );
}

export default StartPage1;

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
