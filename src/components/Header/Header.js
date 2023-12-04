import React, { useContext, useState } from 'react'
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import logo from "../../images/download.png"
import avatar from "../../images/avatar.png"
import Loader from '../../shared/Loader';
import "./_header.scss";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import { Context } from '../../context/contextApi';

const Header = ( {handleToggleSideBar} ) => {

  const { loading } = useContext(Context);
  const[query,setquery] = useState('');
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (  (event.key === 'Enter' || event === 'search_icon') && query?.length > 0) {

          navigate(`/search/${query}`);
          setquery('');

    } else {
      
    }
  }
  
  return (

    <div className='header'>
       {loading && <Loader />}  
      <div className="header__logoDiv">
          <MenuSharpIcon className='header__menuIcon' onClick={ () => {handleToggleSideBar()} } />
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>

      <div className="header__formDiv">
        <form>
          <input type="text" placeholder='Search' onChange={ (e) => setquery(e.target.value) } 
            onKeyUp={searchQueryHandler}
            value={query}
          />
            <button type='submit' onClick={ () => searchQueryHandler('search_icon')}>
              <SearchSharpIcon className='search_icon'/>
            </button>
        </form>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className='videoIcon' />
        <NotificationsSharpIcon className="notiIcon" />
        <img src={avatar} alt="avatar" className='header__icons__avatar' />
      </div>
    </div>

  )
}

export default Header