import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./Video";
import movie from "./movie.mp4";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
        {/* <Video
          url={movie}
          channel="eetttyyy"
          description="Yoo this works"
          song="99 problems but REACT AINT ONE!"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url={movie}
          channel="eetttyyy"
          description="Yoo this works"
          song="99 problems but REACT AINT ONE!"
          likes={123}
          messages={456}
          shares={789}
        /> */}
      </div>

      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
