import React from "react";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import Navbar from "../../components/Navbar";

function StartPage() {
    return (
        <View style={styles.container}>
            <Navbar/>
        </View>
    );
}

export default StartPage;

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
