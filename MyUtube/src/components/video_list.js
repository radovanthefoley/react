import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // remaping data to react components
  const videoItems = props
    .videos
    .map((video) => <VideoListItem key={video.etag} video={video}/>);

  // className is ReactJS attribute for css class React correctly renders arrays
  // of valid react components
  return <ul className="col-md-4 list-group">
    {videoItems}
  </ul>;
}

export default VideoList;
