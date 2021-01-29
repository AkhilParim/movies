import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Loading = () => {
  return (
    <div class="loading">
      <Lottie options={defaultOptions} height={240} width={180}/>
      <p>Please wait while we are fetching your data..</p>
    </div>
  )
}

export default Loading;
