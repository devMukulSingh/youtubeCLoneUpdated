///////////////IMPORTS//////////////////////
import React, { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./_search.scss";
import { useParams } from 'react-router-dom'; 
import { Context } from "../../context/contextApi";
import { fetchDataFromApi } from "../../utils/api";
import FETCH_API from '../../utils/hooks/FETCH_API';
const abbreviate = require('number-abbreviate');
///////////////IMPORTS//////////////////////

/////FUNCTIONS STARTS
const Search = () => {
  const { query } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY5;

  const { data : searchData ,loading:searchLoading } = FETCH_API(`search?query=${query}`, API_KEY);
  console.log(searchData);


//JSX PART STARTS
  return (
    <>
          <div className="search container-fluid">
        {
          searchData?.data?.map((video, index) => {
            if(video.type !== "video") return false;
            return (
              <Link to ={`/video/${video?.videoId}`} className='link' key={index}>
                <div className='search__videoCard' key={video?.videoId}>
                  <div className="search__videoCard__thumbnail">
                      <img src={video?.thumbnail?.[0]?.url} alt="thumbnail" />
                      <h6> {video?.lengthText} </h6>
                  </div>
                  <div className="search__videoCard__videoDetails">
                    <h6>{video?.title}</h6>
                    <p>{` ${abbreviate(video?.viewCount, 2)}`} views • {video?.publishedText}</p>
                    <span><img src={video?.channelThumbnail?.[0]?.url} alt="avatar" /> {video?.channelTitle} </span>
                    <p className='desc'>{video?.description} </p>  
                  </div>
                </div>
                </Link>
            )
          })
        }
        </div>             
    </>
  )
}
/////////////////////////JSX PART ends/////////////////////////////////

export default Search
 