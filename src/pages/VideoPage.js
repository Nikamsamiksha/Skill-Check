import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Video } from "./videos/components/Video";
import useVideoList from "../hooks/useVideoList";

export const VideoPage = () => {
  const { id, subject } = useParams();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?${id}`;

  const [page, setPage] = useState(1);
  const { videos } = useVideoList(page);
  const [suggestions, setSuggestions] = useState([]);

  // Map subjects to their respective indexes
  const getSubjectIndex = (subject) => {
    switch (subject) {
      case "English":
        return 0;
      case "Maths":
        return 1;
      case "Paintings":
        return 2;
      case "Rhymes":
        return 3;
      default:
        return null;
    }
  };

  const subjectIndex = getSubjectIndex(subject);

  // Find the current video from the correct subject's video list
  const video =
    videos &&
      videos.length !== 0 &&
      subjectIndex !== null
      ? videos[subjectIndex].find((v) => v.youtubeID === id)
      : null;

  useEffect(() => {
    setPage(1);
    if (video && videos.length > 0) {
      setSuggestions(generateVideoIndex(video, videos[subjectIndex]));
    }
  }, [videos, video]);

  const generateVideoIndex = (video, videosList) => {
    if (!video || !videosList) return [];

    return videosList
      .filter((v) => v.keyword === video.keyword && v.youtubeID !== video.youtubeID)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };

  function toggleMiniPlayer() {
    setStatus((prev) => !prev);
  }

  return (
    <main onClick={toggleMiniPlayer} className="pt-10">
      <ReactPlayer
        className="object-cover p-5 lg:p-0 lg:h-[1000px] aspect-ratio"
        url={videoUrl}
        width="100%"
        height="100%"
        playing={status}
        controls
      />
      <div className="my-5">
        <div className="text-xl font-bold my-2">Would you also like to see?</div>
        <div className="flex gap-x-5">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => <Video key={suggestion.id} video={suggestion} subject={subject} />)
          ) : (
            <p>No related videos found.</p>
          )}
        </div>

      </div>
      <div className="flex justify-between p-5 lg:p-0 my-2 lg:my-5">
        <Link to={`/`}>
          <button className="bg-primary-100 inline p-2 lg:p-5 rounded-lg text-md lg:text-2xl lg:games-font hover:shadow-lg">
            Back To Home
          </button>
        </Link>
        {(subject === "Maths" || subject === "English" || subject === "GK") && (
          <Link to={`/quiz/${subject}/${id}`}>
            <button
              onClick={() => setStatus(!status)}
              className="bg-primary-100 inline p-2 lg:p-5 rounded-lg text-md lg:text-2xl lg:games-font hover:shadow-lg"
            >
              Attempt Quiz
            </button>
          </Link>
        )}
      </div>
  
    </main>
  );
};
