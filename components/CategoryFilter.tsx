import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { colors } from "@/constants/theme";

type CategoryFilterProps = {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
};

export default function CategoryFilter({
    categories,
    activeCategory,
    onSelect,
}: CategoryFilterProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                    <Pressable
                        key={cat}
                        style={isActive ? styles.active : styles.item}
                        onPress={() => onSelect(cat)}
                    >
                        <Text style={isActive ? styles.activeText : styles.text}>
                            {cat}
                        </Text>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        paddingBottom: 28,
    },

    item: {
        backgroundColor: colors.surface,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
    },

    active: {
        backgroundColor: colors.primary,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
    },

    text: {
        color: "#A5A5B2",
        fontSize: 13,
        fontWeight: "600",
    },

    activeText: {
        color: colors.textPrimary,
        fontSize: 13,
        fontWeight: "700",
    },
});
