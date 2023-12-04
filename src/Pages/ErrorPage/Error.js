import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
        404 Error Page
        <Link to="/">
            <button className='btn btn-primary'>
                Go Back
            </button>
        </Link>
     </div>
  )
}

export default Error