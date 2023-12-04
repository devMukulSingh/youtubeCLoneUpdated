import React from 'react'
import "./_videoCard.scss";

import { Link } from "react-router-dom"
const abbreviate = require('number-abbreviate')

const VideoCard = ( { videoData,loading } ) => {
  // console.log(videoData.thumbnail?[0]?.url);

  return (
    <>
    {
      !loading &&
        <Link to ={`/video/${videoData?.videoId}`} className='link'>
          <div className="videoCard">
            <div className="videoCard__top">
              <img src={videoData?.thumbnail?.[1]?.url} alt="thumbnail" />
            <span>
              {videoData?.lengthText}
            </span>
            </div>

            <div className="videoCard__details">
                <img src={videoData?.channelThumbnail?.[0]?.url} alt="channel_logo" />
              <div className="videoCard__details__title">
                <h6>{videoData?.title}</h6>
                <span>
                  {videoData?.channelTitle}<br/>{ abbreviate(videoData?.viewCount,1).toString().toLocaleUpperCase() } views • {videoData?.publishedText}
                </span>
              </div>
            </div>
          </div>
      </Link>
    }
    </>
  )
}

export default VideoCard