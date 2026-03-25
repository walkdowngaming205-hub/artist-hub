import React, { useState } from "react";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div>
      <h1>🎵 Deezy Artist Hub</h1>
      <SongList onSelectSong={setSelectedSong} />
      <SongDetail song={selectedSong} />
    </div>
  );
}

export default App;