import { colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function HomeHeader() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.greeting}>Welcome!</Text>
                <Text style={styles.logo}>Otakuverse</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    greeting: {
        color: colors.textSecondary,
        fontSize: 14,
        marginBottom: 4,
        marginTop: 20,
    },

    logo: {
        color: colors.textPrimary,
        fontSize: 28,
        fontWeight: "800",
    },
});
