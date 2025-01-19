import React from "react";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import Navbar from "../../components/Navbar";

function StartPage1() {
    return (
        <View style={styles.container}>
            <Navbar/>
        </View>
    );
}

export default StartPage1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        maxWidth: 350,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
});
