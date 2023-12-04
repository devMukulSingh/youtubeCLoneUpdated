/////////////////////////IMPORTS//////////////////////////////////////////////
import React, { useContext, useState  } from 'react'
import { Link } from 'react-router-dom';
import "./_sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
 import { useNavigate } from 'react-router-dom';
///////////////////////////FUNCTIONS STARTS//////////////////////////////////////
const Sidebar = ({sidebar}) => {

  const categories = [ 
    {name:'Music', icon: <MusicNoteOutlinedIcon/>} ,
    {name:'Games' , icon: <SportsEsportsOutlinedIcon/>},
    { name:'Movies', icon: <EmojiEventsOutlinedIcon/>} ,
    ]
    const navigate = useNavigate();
    const handleHome = (query="/") => {
      navigate(`${query}`);
    }
///////////////////////////////JSX PART STARTS///////////////////////////////////////////
  return (
      <div className={sidebar? "sidebar" : "sidebar close"}>
          <li onClick={ () => handleHome() }>
            <HomeIcon/> <span>Home</span>
          </li>
          <li onClick={ () => handleHome('/trending/now') }>
            <WhatshotIcon/> <span>Trending</span>
          </li>
        {
          categories.map( (category,index )=>{
            return(
              <Link className='link' to={`/trending/${category.name}`} key={index} > 
                <li>
                  {category.icon} <span>{category.name}</span> 
                </li>
              </Link> 
            )
          }) 
        }
        <hr/>
        <li ><LogoutIcon/> <span>SignOut</span></li>
      </div>
  )
}
export default Sidebar