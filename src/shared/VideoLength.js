import React from 'react';
import moment  from 'moment';

const VideoLength = ( {time} ) => {
    const videoLengthInFormat = moment()
    ?.startOf('day')
    ?.seconds(time)
    ?.format("H:mm:ss");
  return (
    <>
        {videoLengthInFormat}
    </>
  )
}

export default VideoLength