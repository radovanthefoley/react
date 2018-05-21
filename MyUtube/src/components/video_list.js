import React from 'react';

const VideoList = (props) => {
  // className is ReactJS attribute for css class
  return <p>{props.videos.length}</p>;
}

export default VideoList;
