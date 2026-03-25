import React, { useRef } from "react";

const SongDetail = ({ song }) => {
  const audioRef = useRef(null);

  if (!song) {
    return <h3>Select a song</h3>;
  }

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>

      <audio ref={audioRef} src={song.file} />

      <button onClick={handlePlay}>▶ Play</button>
      <button onClick={handlePause}>⏸ Pause</button>
    </div>
  );
};

export default SongDetail;