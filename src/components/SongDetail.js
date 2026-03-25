import React from "react";

const SongDetail = ({ song }) => {
  if (!song) {
    return <h3>Select a song</h3>;
  }

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <button>▶ Play</button>
    </div>
  );
};

export default SongDetail;