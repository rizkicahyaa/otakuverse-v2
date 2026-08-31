import AnimeCard from "@/components/AnimeCard";
import CategoryFilter from "@/components/CategoryFilter";
import HomeHeader from "@/components/HomeHeader";
import SectionHeader from "@/components/SectionHeader";
import VoiceActorsCard from "@/components/VoiceActorsCard";

import { colors } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
        image: "https://cdn1.epicgames.com/spt-assets/99dc46c68ea14324964a856d18dcac5b/genshin-impact-hqdph.jpg",
    },
    {
        id: "g2",
        title: "Umamusume: Pretty Derby",
        genre: "RPG, Racing, Sport",
        rating: "8.7",
        image: "https://static.wikia.nocookie.net/umamusume/images/8/88/Uma_Musume_Pretty_Derby_Title_Screen.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210225061449",
    },
    {
        id: "g3",
        title: "Honkai: Star Rail",
        genre: "Turn-Based RPG, Gacha",
        rating: "8.9",
        image: "https://m.media-amazon.com/images/M/MV5BNTZhOTAzNWMtNzE5NS00MzRlLWE4ZjItNzM3N2JlMDA5MTczXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
        id: "g4",
        title: "A Space For the Unbound",
        genre: "Adventure, Puzzle, Indie",
        rating: "8.5",
        image: "https://store-images.s-microsoft.com/image/apps.34505.14188977176880761.0222c884-9ed3-42db-a04e-0bbe476f4c9f.aac26568-94bc-4567-89b7-a6afbb8d8199",
    },
];

const CHARACTERS_LIST = [
    {
        id: "c1",
        title: "Shiina Mahiru",
        genre: "Romance, School",
        rating: "-",
        image: "https://cdn.myanimelist.net/images/characters/3/624218.jpg",
    },
    {
        id: "c2",
        title: "Mejiro McQueen",
        genre: "Sport, Racing",
        rating: "-",
        image: "https://cdn.myanimelist.net/images/characters/4/574456.jpg",
    },
    {
        id: "c3",
        title: "Mejiro Ardan",
        genre: "Sport, Racing",
        rating: "-",
        image: "https://cdn.myanimelist.net/images/characters/6/577276.jpg",
    },
    {
        id: "c4",
        title: "Rei Ayanami",
        genre: "Sci-Fi, Mecha, Adventure",
        rating: "-",
        image: "https://cdn.myanimelist.net/images/characters/11/314932.jpg",
    },
];

const VOICE_ACTORS_LIST = [
    {
        id: "v1",
        name: "Ayana Taketatsu",
        nationality: "Japanese",
        role: "Voice Actress",
        image: "https://cdn.myanimelist.net/r/140x220/images/voiceactors/2/86545.jpg?s=8e592b7bbad17ca11a785db15dd62ce4",
    },
    {
        id: "v2",
        name: "Kana Hanazawa",
        nationality: "Japanese",
        role: "Voice Actress",
        image: "https://cdn.myanimelist.net/r/140x220/images/voiceactors/3/69318.jpg?s=cb66a62f32f59733b5e95de36d8e3dcf",
    },
    {
        id: "v3",
        name: "Minase Inori",
        nationality: "Japanese",
        role: "Voice Actress",
        image: "https://cdn.myanimelist.net/r/140x220/images/voiceactors/2/74704.jpg?s=1394167ef5fb48a5bd07f1d5ef5e3dd9",
    },
    {
        id: "v4",
        name: "Oonishi Saori",
        nationality: "Japanese",
        role: "Voice Actress",
        image: "https://cdn.myanimelist.net/r/140x220/images/voiceactors/3/63372.jpg?s=4e3ac4fe03444762700543027e79c90d",
    },
];

export default function Index() {
    const [activeCategory, setActiveCategory] = useState("All");

    const showAnime = activeCategory === "All" || activeCategory === "Anime";
    const showGames = activeCategory === "All" || activeCategory === "Games";
    const showCharacters = activeCategory === "All" || activeCategory === "Characters";
    const showVoiceActors = activeCategory === "All" || activeCategory === "Voice Actors";

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <HomeHeader />

            <CategoryFilter categories={CATEGORIES} activeCategory={activeCategory} onSelect={setActiveCategory} />

            {showAnime && (
                <>
                    <SectionHeader title="Anime" onSeeAll={() => {}} />
                    <View style={styles.list}>
                        {ANIME_LIST.map((item) => (
                            <AnimeCard key={item.id} {...item} />
                        ))}
                    </View>
                </>
            )}

            {showGames && (
                <>
                    <SectionHeader title="Games" onSeeAll={() => {}} />
                    <View style={styles.list}>
                        {GAMES_LIST.map((item) => (
                            <AnimeCard key={item.id} {...item} />
                        ))}
                    </View>
                </>
            )}

            {showCharacters && (
                <>
                    <SectionHeader title="Characters" onSeeAll={() => {}} />
                    <View style={styles.list}>
                        {CHARACTERS_LIST.map((item) => (
                            <AnimeCard key={item.id} {...item} />
                        ))}
                    </View>
                </>
            )}

            {showVoiceActors && (
                <>
                    <SectionHeader title="Voice Actors" onSeeAll={() => {}} />
                    <View style={styles.list}>
                        {VOICE_ACTORS_LIST.map((item) => (
                            <VoiceActorsCard key={item.id} {...item} />
                        ))}
                    </View>
                </>
            )}
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
