import React from "react";
import songs from "../data/songs";

const SongList = ({ onSelectSong }) => {
  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <div key={song.id} style={{ marginBottom: "10px" }}>
          <span>{song.title}</span>
          <button onClick={() => onSelectSong(song)} style={{ marginLeft: "10px" }}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;