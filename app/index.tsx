import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View>
                <Text style={styles.title}>Otakuverse</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232323",
    },

    content: {
        padding: 20,
    },

    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
