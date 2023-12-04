import React, { useEffect, useState } from 'react';
import CategoriesBar from "../../components/categoriesBar/CategoriesBar.js";
import VideoCard from '../../components/Video/VideoCard.js';
import FETCH_API from '../../utils/hooks/FETCH_API.js';
import { fetchDataFromApi } from '../../utils/api.js';
import {LinearProgress} from '@mui/material';




const HomeScreen = () => {

  const [homeScreen, setHomeScreen] = useState(null);
  const [ categoryQuery,setCategoryQuery  ] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(null);
  const API_KEY1 = process.env.REACT_APP_API_KEY1;
  const API_KEY2 = process.env.REACT_APP_API_KEY2; 

  const { data:homeFeedData , loading:homeFeedLoading } = FETCH_API(`home`,API_KEY1);
  console.log(homeFeedLoading);

  const getCategoriesData = async() => {
    setCategoryLoading(true);
    const res = await fetchDataFromApi(`search?query=${categoryQuery}`,API_KEY2);
    setHomeScreen(res);
    setCategoryLoading(false);
  }

  useEffect( () => {
    if( !homeFeedLoading && homeFeedData){
      setHomeScreen(homeFeedData);
    };
  },[homeFeedData,homeFeedLoading])

  useEffect( () => {
    if(categoryQuery){
      getCategoriesData();
    }
  },[categoryQuery]);

  return (
    <>
  
        
        <div className="container-fluid">
                <div className="homeScreen">
                    <CategoriesBar setCategoryQuery={setCategoryQuery}/>

                  <div className="row">
                    {
                      !homeFeedLoading && homeScreen?.data?.filter( videoData => videoData?.type=='video')?.map( (videoData,index) => {
                              return(
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 " key={index} >
                                    <VideoCard key ={videoData?.videoId} id={videoData?.videoId} 
                                      videoData = {videoData} loading={homeFeedLoading} categoryLoading={categoryLoading}/>
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

export default HomeScreen