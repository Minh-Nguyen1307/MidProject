import React, {useState} from 'react'
import ListPoster from './ListPoster'

const anime = [
    {
        id: 1,
        image: "./public/One-piece 1.png",
        episode: "Episode 1018",
        nameAnime: "One piece",
    },
    {
        id: 2,
        image: "./public/boruto.png",
        episode: "Episode 250",
        nameAnime: "Boruto",
    },
    {
        id: 3,
        image: "./public/spy1.png",
        episode: "Episode 07",
        nameAnime: "Spy Family",
    },
    {
        id: 4,
        image: "./public/a1.png",
        episode: "Episode 28",
        nameAnime: "Kyoujin",
    },
    {
        id: 5,
        image: "./public/a2.png",
        episode: "Episode 28",
        nameAnime: "Tsubasa",
    },
    {
        id: 6,
        image: './public/a3.png',
        episode: "Episode 28",
        nameAnime: "Ball",
    },
];
const Release = () => {
    const [animes, setAnimes] = useState(anime)
  return (
    <div>
        <ListPoster animes={animes} />
    </div>
  )
}
export default Release;