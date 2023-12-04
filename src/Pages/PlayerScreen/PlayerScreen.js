import { IconContext } from "react-icons";
import {React, useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import ReactPlayer from 'react-player'
import { Context } from "../../context/contextApi";
import { fetchDataFromApi } from '../../utils/api';
import RelatedVideos from "../../components/relatedVideoSection/RelatedVideos";
import "./playerScreen.scss";
import { LiaDownloadSolid } from 'react-icons/lia';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { BiLike } from "react-icons/bi"
import { AiOutlineDislike } from "react-icons/ai";
import FETCH_API from "../../utils/hooks/FETCH_API";
import CommentsBox from "../../components/CommentsBox/CommentsBox";
const abbreviate = require('number-abbreviate');

const PlayerScreen = () => {
  const { id } = useParams();
  const [subscribe,setsubscribe] = useState('false');

  const API_KEY2 = process.env.REACT_APP_API_KEY2;
  const API_KEY3 = process.env.REACT_APP_API_KEY3;
  const API_KEY4 = process.env.REACT_APP_API_KEY4;

  const { data : videoData, loading: videoLoading } = FETCH_API(`video/info?id=${id}`,API_KEY2);
  const { data : channelData , loading : channelLoading } = FETCH_API(`channel/about?id=${videoData?.channelId}`, API_KEY3);
  const { data : commentsData, loading: commentsLoading } = FETCH_API(`comments?id=${id}`,API_KEY3);
  const { data : relatedVidData , loading : relatedLoading } = FETCH_API(`related?id=${id}`, API_KEY4);

  const handleClick = () => {
    setsubscribe(!subscribe); 
    document.getElementById('subscribed').innerHTML = "Subscribed";
  }


//////////////////////////////////////////JSX STARTS//////////////////////////////

if(!videoLoading)
return (
    <>
        <div className="container-fluid">
          <div className="playerScreen">

            <div className="row w-100 ">
              <div className="col-lg-8 col-md-12 col-sm-12">

                <div className="playerScreen__player">
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                    width='100%' height='100%'
                    controls
                    style={ {backgroundColor:"white" }}
                    playing={false}
                    />
                </div>

                
                  <div className="playerScreen__title">
                      <h6>{videoData?.title}</h6>
                  </div>
                  <div className="playerScreen__videoDetails">

                    {
                      !channelLoading && channelData &&
                      <div className="playerScreen__videoDetails__info">

                      <div>
                        <img src = {channelData?.avatar?.[2]?.url} alt="channel_logo" />
                      </div>
                      <div className="flex flex-column mx-3">
                          <h6>{channelData?.title}</h6>
                          <p> { channelData?.subscriberCountText } subscribers</p>
                      </div>
                      <div>
                          <button id="subscribed" className={ subscribe? 'subscribeBtn' : 'subscribedBtn' } onClick={()=>handleClick()}> 
                            Subscribe 
                          </button>
                      </div>
                       
                    </div>
                    }
                    <div className="playerScreen__videoDetails__buttons">
                      <IconContext.Provider value={{ size:"1.5rem" }}>

                       <span><button className="btn__like"><BiLike className='likeIcon'/>
                          { abbreviate(videoData?.likeCount,1).toString().toLocaleUpperCase()  }
                       </button> <button className="dislikeIcon"><AiOutlineDislike /></button></span> 
                      </IconContext.Provider>
                      <button> <ShareOutlinedIcon/> Share </button>
                      <button> <LiaDownloadSolid/> Download </button>
                    </div>
                  </div>

                    <div className="playerScreen__viewsTime">
                        <span>
                           { abbreviate(videoData?.viewCount,1).toString().toLocaleUpperCase() } views {videoData?.title}
                        </span>
                        <p>{videoData?.description}</p>
                    </div>
                {
                  !commentsLoading && commentsData && 
                  <div className="playerScreen__comments">
                    <h4>
                      {commentsData?.commentsCount} Comments
                    </h4>
                    {
                      commentsData?.data?.map( (comment, index) => {
                        return(
                          <CommentsBox comment = {comment} key={index}/>
                        )
                      })
                    }
                </div>
                }



                </div>
               {/* /////////////Related Videos Starts//////////////////////////////  */}
              <div className="col-lg-4 ">
                <div className="playerScreen__relatedVideos">
                  {
                    !relatedLoading && relatedVidData?.data?.map( (video,index)=> {
                      if(video.type !== "video") return false;
                      return(
                        <RelatedVideos key={index} video={video}/>
                      )
                    })
                  }
                </div>
              </div>
               {/* /////////////Related Videos Starts//////////////////////////////  */}
            </div>

          </div>
        </div>
      

    </>
  )
}

export default PlayerScreen;
