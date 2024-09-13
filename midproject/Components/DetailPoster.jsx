import React from 'react'
import './DetailPoster.css'
const DetailPoster = (props) => {
    const {image, episode, nameAnime} = props;
  return (
    <div className='detailPoster'>
        <img src={image} alt="" />
        <p>{episode}</p>
        <h4>{nameAnime}</h4>
    </div>
  )
}
export default DetailPoster;