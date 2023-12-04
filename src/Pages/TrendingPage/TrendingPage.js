import React, { useEffect, useState} from 'react';
import CategoriesBar from "../../components/categoriesBar/CategoriesBar.js";
import VideoCard from '../../components/Video/VideoCard.js';
import {useParams} from "react-router-dom";
import { fetchDataFromApi } from '../../utils/api.js';

const TrendingPage = () => {

    const { category } = useParams();
    const [loading, setLoading] = useState(null);
    const [trendingData, setTrendingData] = useState(null);
    const API_KEY1 = process.env.REACT_APP_API_KEY1;

    useEffect( () => {
        setTrendingData(null);
        getTrendingPageData();
    },[category]);

  const getTrendingPageData = async() => {
    setLoading(true);
    const res = await fetchDataFromApi(`trending?geo=IN&type=${category.toLocaleLowerCase()}`,API_KEY1);
    setTrendingData(res);
    setLoading(false);
  }


  return (
    <>
      <div className="container-fluid">
          <div className="homeScreen">
              <CategoriesBar/>

            <div className="row">
              {
                !loading && trendingData?.data?.filter( videoData => videoData?.type=='video')?.map( (videoData,index) => {
                        return(
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 " key={index} >
                              <VideoCard key ={videoData?.videoId} id={videoData?.videoId} videoData = {videoData} loading={loading}/>
                          </div>
                        )
                        
                    })
              }
              </div>

        </div>
      </div>
    </>
  )
}

export default TrendingPage