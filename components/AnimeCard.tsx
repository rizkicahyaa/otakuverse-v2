import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

type AnimeCardProps = {
    title: string;
    genre: string;
    rating: string;
    image: string;
    onPress?: () => void;
};

export default function AnimeCard({
    title,
    genre,
    rating,
    image,
    onPress,
}: AnimeCardProps) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Text style={styles.genre} numberOfLines={1}>{genre}</Text>

                <View style={styles.ratingRow}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: 14,
        padding: 10,
        flexDirection: "row",
    },

    imageWrapper: {
        width: 80,
        height: 100,
        borderRadius: 10,
        backgroundColor: colors.surfaceDeep,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
    },

    info: {
        flex: 1,
        paddingLeft: 14,
        justifyContent: "center",
    },

    title: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 6,
    },

    genre: {
        color: colors.textMuted,
        fontSize: 12,
        marginBottom: 10,
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    star: {
        color: colors.star,
        fontSize: 15,
        marginRight: 4,
    },

    rating: {
        color: colors.textDim,
        fontSize: 13,
        fontWeight: "600",
    },
});
