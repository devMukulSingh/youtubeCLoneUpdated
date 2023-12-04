import React from 'react'
import { Link } from "react-router-dom"
import "./RelatedVideo.scss";
const abbreviate = require('number-abbreviate')
 

const RelatedVideo = ( {video}) => {
   
  return (
    <>
      <Link to ={`/video/${video?.videoId}`} className='link'>
        <div className="video">
          <div className="video__top">
            <img src={video?.thumbnail?.[1]?.url} alt="thumbnail" />
          <span>{video?.lengtText}</span>
          </div>
          <div className="video__details">
              <h6>{video?.title}</h6>
              <p> {video?.channelTitle} </p>
              <p>{ abbreviate(video?.viewCount,1).toString().toUpperCase() } views  •  {video?.publishedTimeText}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RelatedVideo
