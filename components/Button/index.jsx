import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Button({text, backgroundColor, borderColor, borderWidth, color, press}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor,
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                },
            ]}
            onPress={() => {
                navigation.navigate(press)
            }}
        >
            <Text style={[
                styles.text,
                {
                    color: color,
                }
            ]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 25,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
