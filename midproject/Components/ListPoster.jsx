import React from 'react'
import DetailPoster from './DetailPoster'
import './ListPoster.css'
const ListPoster = (props) => {
    const {animes = []} = props;
    const listPoster = animes.map((anime) => (<DetailPoster key={anime.id} image={anime.image} episode = {anime.episode} nameAnime={anime.nameAnime} />))
  return (
    <div className='list'>
        {listPoster}
    </div>
  )
}
export default ListPoster;