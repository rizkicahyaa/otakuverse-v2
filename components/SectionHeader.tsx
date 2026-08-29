import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

type SectionHeaderProps = {
    title: string;
    onSeeAll?: () => void;
};

export default function SectionHeader({ title, onSeeAll }: SectionHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onSeeAll}>
                <Text style={styles.seeAll}>See all</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
        marginTop: 20,
    },

    title: {
        color: colors.textPrimary,
        fontSize: 20,
        fontWeight: "700",
    },

    seeAll: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: "600",
    },
});
