import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio src="/audio/karma_chameleon.mp3" autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;