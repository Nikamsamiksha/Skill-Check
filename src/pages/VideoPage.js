import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

export const VideoPage = () => {
  const { id, subject } = useParams();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  return (
    <main onClick={toggleMiniPlayer} className="pt-10">
      <ReactPlayer
        className="object-cover h-[1000px] aspect-ratio"
        url={videoUrl}
        width="100%"
        height="100%"
        playing={status}
        controls
      />
      <div>
        {
          (subject === "Maths" || subject === "English") &&
          <Link to={`/quiz/${subject}/${id}`} className="flex justify-end my-5">
            <button
              onClick={() => setStatus(!status)}
              className="bg-primary-100 inline p-5 rounded-lg text-2xl games-font"
            >
              Attempt Quiz
            </button>
          </Link>
        }
      </div>
    </main>
  );
};
