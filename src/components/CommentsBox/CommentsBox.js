import React from 'react';
import './CommentsBox.scss';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import userProfile from "../../images/avatar.png";

const CommentsBox = ({comment}) => {
  return (
    <>
        <div className='comments'>
            <div>
                <img src={comment?.authorThumbnail?.[2]?.url} alt="userProfile" />
            </div>

            <div className='comments__userData'>
                <div className='userDetails'>
                    <h6>
                        {comment?.authorText}
                    </h6>
                    <h6>
                        {comment?.publishedTimeText}
                    </h6>

                </div>
                <div className='commentText'>
                    <h6>
                        {comment?.textDisplay}
                    </h6>
                </div>
                <span>
                   <ThumbUpOutlinedIcon style={{ marginRight:2, cursor:'pointer'}}/> {comment?.likesCount}
                    <ThumbDownAltOutlinedIcon style={{ cursor:'pointer', marginLeft:10}}/>
                </span>
            </div>

        </div>
    </>
  )
}

export default CommentsBox