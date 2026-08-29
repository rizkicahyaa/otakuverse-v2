import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { colors } from "@/constants/theme";
import AnimeCard from "@/components/AnimeCard";
import CategoryFilter from "@/components/CategoryFilter";
import HomeHeader from "@/components/HomeHeader";
import SectionHeader from "@/components/SectionHeader";

const CATEGORIES = ["All", "Anime", "Games", "Characters", "Voice Actors"];

const ANIME_LIST = [
    {
        id: "1",
        title: "Demon Slayer",
        genre: "Action, Historical, Shounen",
        rating: "9.1",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    },
    {
        id: "2",
        title: "Haikyuu!!",
        genre: "Sport, Comedy, Shounen",
        rating: "9.0",
        image: "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    },
    {
        id: "3",
        title: "Angel Beats!",
        genre: "Drama, Fantasy",
        rating: "8.8",
        image: "https://cdn.myanimelist.net/images/anime/1244/111115.jpg",
    },
    {
        id: "4",
        title: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        genre: "Drama, Romance, Supernatural",
        rating: "8.8",
        image: "https://cdn.myanimelist.net/images/anime/1301/93586.jpg",
    },
];

const GAMES_LIST = [
    {
        id: "g1",
        title: "Genshin Impact",
        genre: "RPG, Open World, Gacha",
        rating: "9.0",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Genshin_Impact_cover_art.jpg/220px-Genshin_Impact_cover_art.jpg",
    },
    {
        id: "g2",
        title: "Blue Archive",
        genre: "RPG, Strategy, Gacha",
        rating: "8.7",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Blue_Archive_game_logo.png/220px-Blue_Archive_game_logo.png",
    },
    {
        id: "g3",
        title: "Honkai: Star Rail",
        genre: "Turn-Based RPG, Gacha",
        rating: "8.9",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Honkai_Star_Rail_game_cover.jpg/220px-Honkai_Star_Rail_game_cover.jpg",
    },
    {
        id: "g4",
        title: "Sword Art Online: Alicization",
        genre: "Action RPG, Anime",
        rating: "8.5",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Sword_Art_Online_Alicization_Lycoris.jpg/220px-Sword_Art_Online_Alicization_Lycoris.jpg",
    },
];

export default function Index() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <HomeHeader />

            <CategoryFilter
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            <SectionHeader title="Anime" onSeeAll={() => {}} />
            <View style={styles.list}>
                {ANIME_LIST.map((item) => (
                    <AnimeCard key={item.id} {...item} />
                ))}
            </View>

            <SectionHeader title="Games" onSeeAll={() => {}} />
            <View style={styles.list}>
                {GAMES_LIST.map((item) => (
                    <AnimeCard key={item.id} {...item} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    list: {
        gap: 12,
    },
});
