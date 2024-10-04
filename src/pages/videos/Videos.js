import React, { useEffect, useState } from 'react'
import useVideoList from '../../hooks/UseVideoList';
import { useParams } from 'react-router-dom';
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

    useEffect(() => {
        setPage(1)
        console.log(videos)
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
                <div className='grid grid-cols-2 lg:grid-cols-3'>
                    {
                        videos && videos.length !== 0 && subject === "English" &&
                        videos[0].map(video =>
                            <Video key={video.id} video={video} subject={subject} />
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Maths" &&
                        videos[1].map(video =>
                            <Video key={video.id} video={video} subject={subject} />
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Rhymes" &&
                        videos[3].map(video =>
                            <Video key={video.id} video={video} subject={subject} />
                        )
                    }
                    {
                        videos && videos.length !== 0 && subject === "Paintings" &&
                        videos[2].map(video =>
                            <Video key={video.id} video={video} subject={subject} />
                        )
                    }
                </div>

            </main>
        </>

    )
}