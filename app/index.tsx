import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Welcome!</Text>
                    <Text style={styles.logo}>Otakuverse</Text>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
                <Pressable style={styles.categoryActive}>
                    <Text style={styles.categoryActiveText}>All</Text>
                </Pressable>

                <Pressable style={styles.category}>
                    <Text style={styles.categoryText}>Anime</Text>
                </Pressable>

                <Pressable style={styles.category}>
                    <Text style={styles.categoryText}>Games</Text>
                </Pressable>

                <Pressable style={styles.category}>
                    <Text style={styles.categoryText}>Characters</Text>
                </Pressable>

                <Pressable style={styles.category}>
                    <Text style={styles.categoryText}>Voice Actors</Text>
                </Pressable>
            </ScrollView>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Anime</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>

            <View style={styles.animeList}>
                <AnimeCard title="Demon Slayer" genre="Action, Historical, Shounen" rating="9.1" image="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" />
                <AnimeCard title="Haikyuu!!" genre="Sport, Comedy, Shounen" rating="9.0" image="https://cdn.myanimelist.net/images/anime/7/76014.jpg" />
                <AnimeCard title="Angel Beats!" genre="Drama, Fantasy" rating="8.8" image="https://cdn.myanimelist.net/images/anime/1244/111115.jpg" />
                <AnimeCard title="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" genre="Drama, Romance, Supernatural" rating="8.8" image="https://cdn.myanimelist.net/images/anime/1301/93586.jpg" />
            </View>
        </ScrollView>
    );
}

type AnimeCardProps = {
    title: string;
    genre: string;
    rating: string;
    image: string;
};

function AnimeCard({ title, genre, rating, image }: AnimeCardProps) {
    return (
        <Pressable style={styles.animeCard}>
            <View style={styles.animeImage}>
                <Image source={{ uri: image }} style={styles.animeImage} resizeMode="cover" />
            </View>

            <View style={styles.animeInfo}>
                <Text style={styles.animeTitle}>{title}</Text>

                <Text style={styles.animeGenre}>{genre}</Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0F14",
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    // Header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    greeting: {
        color: "#8E8E9A",
        fontSize: 14,
        marginBottom: 4,
    },

    logo: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "800",
    },

    profileButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#7C3AED",
        justifyContent: "center",
        alignItems: "center",
    },

    profileText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
    },

    // Search
    searchContainer: {
        height: 52,
        backgroundColor: "#1B1B24",
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 28,
    },

    searchIcon: {
        color: "#9999A5",
        fontSize: 25,
        marginRight: 8,
    },

    searchInput: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 15,
    },

    // Section
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
        marginTop: 4,
    },

    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
    },

    seeAll: {
        color: "#8B5CF6",
        fontSize: 14,
        fontWeight: "600",
    },

    // Featured
    featuredCard: {
        minHeight: 190,
        backgroundColor: "#292044",
        borderRadius: 20,
        padding: 20,
        marginBottom: 28,
        overflow: "hidden",
        flexDirection: "row",
    },

    featuredContent: {
        flex: 1,
        zIndex: 2,
    },

    featuredLabel: {
        color: "#A78BFA",
        fontSize: 11,
        fontWeight: "800",
        letterSpacing: 1,
        marginBottom: 8,
    },

    featuredTitle: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "800",
        marginBottom: 8,
    },

    featuredDescription: {
        color: "#C4BDD7",
        fontSize: 12,
        lineHeight: 18,
        maxWidth: 190,
    },

    watchButton: {
        alignSelf: "flex-start",
        backgroundColor: "#8B5CF6",
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 8,
        marginTop: 14,
    },

    watchButtonText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
    },

    featuredImagePlaceholder: {
        width: 100,
        height: 150,
        backgroundColor: "#3A2E5E",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },

    imagePlaceholderText: {
        fontSize: 42,
    },

    // Category
    categoryContainer: {
        gap: 10,
        paddingBottom: 28,
    },

    category: {
        backgroundColor: "#1B1B24",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
    },

    categoryActive: {
        backgroundColor: "#8B5CF6",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
    },

    categoryText: {
        color: "#A5A5B2",
        fontSize: 13,
        fontWeight: "600",
    },

    categoryActiveText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
    },

    // Anime List
    animeList: {
        gap: 12,
    },

    animeCard: {
        backgroundColor: "#1B1B24",
        borderRadius: 14,
        padding: 10,
        flexDirection: "row",
    },

    animeImage: {
        width: 80,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#30264A",
        justifyContent: "center",
        alignItems: "center",
    },

    animeEmoji: {
        fontSize: 35,
    },

    animeInfo: {
        flex: 1,
        paddingLeft: 14,
        justifyContent: "center",
    },

    animeTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 6,
    },

    animeGenre: {
        color: "#858592",
        fontSize: 12,
        marginBottom: 10,
    },

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    star: {
        color: "#FBBF24",
        fontSize: 15,
        marginRight: 4,
    },

    rating: {
        color: "#D1D1D8",
        fontSize: 13,
        fontWeight: "600",
    },
});
