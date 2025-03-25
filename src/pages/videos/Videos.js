import React, { useEffect, useState } from 'react'
import useVideoList from '../../hooks/useVideoList';
import { Link, useParams } from 'react-router-dom';
import { Video } from './components/Video';
import ReactPlayer from 'react-player';

export const Videos = () => {
    const [page, setPage] = useState(1);
    const { videos } = useVideoList(page);

    const { subject } = useParams();

    const videoUrlMaths = require('../../assets/maths_gif.mp4');
    const videoUrlEnglish = require('../../assets/english_gif.mp4');
    const videoUrlPainting = require('../../assets/painting_gif.mp4');
    const videoUrlRhymes = require('../../assets/rhymes_gif.mp4');
    const videoUrlGK = require('../../assets/gk_gif.mp4');

    useEffect(() => {
        setPage(1)
    }, [videos]);

    return (
        <>
            <main className='mt-60'>
                {
                    subject === "Maths" &&
                    <div className='flex gap-x-2 justify-evenly content-center mb-5 px-5 lg:px-0'>
                        <h2 className='text-bold text-2xl lg:text-7xl font-serif lg:mt-8 text-primary-30 self-center'>Welcome to the world of numbers!</h2>
                        <ReactPlayer
                            className="object-cover aspect-ratio self-center"
                            url={videoUrlMaths}
                            width="60%"
                            height="20%"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    </div>
                }
                {
                    subject === "English" &&
                    <div className='flex gap-x-2 justify-evenly content-center mb-5 px-5 lg:px-0'>
                        <h2 className='text-bold text-2xl lg:text-7xl font-serif lg:mt-8 text-primary-30 self-center'>Welcome to the world of words!</h2>
                        <ReactPlayer
                            className="object-cover aspect-ratio self-center"
                            url={videoUrlEnglish}
                            width="40%"
                            height="40%"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    </div>
                }
                {
                    subject === "Rhymes" &&
                    <div className='flex flex-row gap-x-2 justify-evenly content-center mb-5 px-5 lg:px-0'>
                        <h2 className='text-bold text-2xl lg:text-7xl font-serif lg:mt-8 text-primary-30 self-center'>Welcome to the world of ideas!
                        </h2>
                        <ReactPlayer
                            className="obeject-cover aspect-ratio self-center"
                            url={videoUrlRhymes}
                            width="20%"
                            height="20%"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    </div>
                }
                {
                    subject === "Paintings" &&
                    <div className='flex gap-x-2 justify-evenly content-center mb-5 px-5 lg:px-0'>
                        <h2 className='text-bold text-2xl lg:text-7xl font-serif lg:mt-8 text-primary-30 self-center'>Welcome to the world of colors!
                        </h2>
                        <ReactPlayer
                            className="object-cover aspect-ratio self-center"
                            url={videoUrlPainting}
                            width="30%"
                            height="20%"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    </div>
                }
                {
                    subject === "GK" &&
                    <div className='flex gap-x-2 justify-evenly content-center mb-5 px-5 lg:px-0'>
                        <h2 className='text-bold text-2xl lg:text-7xl font-serif lg:mt-8 text-primary-30 self-center'>Welcome to the world of Knowledge!
                        </h2>
                        <ReactPlayer
                            className="object-cover aspect-ratio self-center"
                            url={videoUrlGK}
                            width="30%"
                            height="20%"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    </div>
                }
                <div className='grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-3'>
                    {
                        videos && videos.length !== 0 && subject === "English" &&
                        videos[0].map(video =>
                            <Video key={video.id} video={video} subject={subject} videos={videos}/>
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Maths" &&
                        videos[2].map(video =>
                            <Video key={video.id} video={video} subject={subject} videos={videos}/>
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Rhymes" &&
                        videos[4].map(video =>
                            <Video key={video.id} video={video} subject={subject} videos={videos}/>
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Paintings" &&
                        videos[3].map(video =>
                            <Video key={video.id} video={video} subject={subject} videos={videos}/>
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "GK" &&
                        videos[1].map(video =>
                            <Video key={video.id} video={video} subject={subject} videos={videos}/>
                        )
                    }
                </div>
                <div className="flex justify-between p-5 lg:p-0 my-2 lg:my-5">
                    <Link to={`/`} >
                        <button
                            className="bg-primary-100 inline p-2 lg:p-5 rounded-lg text-md lg:text-2xl lg:games-font hover:shadow-lg"
                        >
                            Back To Home
                        </button>
                    </Link>
                </div>
            </main>
        </>

    )
}