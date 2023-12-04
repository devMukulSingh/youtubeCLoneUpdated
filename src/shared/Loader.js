import React from 'react'
import "./Loader.scss"; 

const Loader = () => {
  return (
    <div className="load-bar">
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
        <div className="load-bar__bar"></div>
    </div>
  )
}

export default Loader