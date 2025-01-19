import React from "react";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import StartComponent2 from "../../components/StartComponent2";

function StartPage2() {
    return (
        <View style={styles.container}>
            <StartComponent2/>
        </View>
    );
}

export default StartPage2;

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
