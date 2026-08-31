import { colors } from "@/constants/theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type VoiceActorsCardProps = {
    name: string;
    nationality: string;
    role: string;
    image: string;
    onPress?: () => void;
};

export default function VoiceActorsCard({ name, nationality, role, image, onPress }: VoiceActorsCardProps) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
            </View>

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={styles.genre} numberOfLines={1}>
                    {nationality}
                </Text>
                <Text style={styles.genre} numberOfLines={1}>
                    {role}
                </Text>
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
