import React from 'react'
import maths from '../../../assets/maths.jpg';
import english from '../../../assets/english.jpg';
import rhymes from '../../../assets/rhymes.png';
import paintings from '../../../assets/paintings.png';
import gk from '../../../assets/gk_image.jpg';

import { Link } from 'react-router-dom';

export const Video = ({ video, subject }) => {

    const title = video && video.title;

    return (
        <div className="lg:w-full max-w-xs lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {
                title !== "Good habits and Bad habits" &&
                <Link to={`/video/${subject}/${video.youtubeID}`}>
                    {
                        subject === "Maths" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={maths}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "English" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={english}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "Rhymes" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={rhymes}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "Paintings" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={paintings}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "GK" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={gk}
                            alt={video.title}
                        />
                    }
                </Link>
            }
            {
                title === "Good habits and Bad habits" &&
                <Link to={`/quiz/${subject}/${video.youtubeID}`}>
                    {
                        subject === "Maths" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={maths}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "English" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={english}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "Rhymes" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={rhymes}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "Paintings" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={paintings}
                            alt={video.title}
                        />
                    }
                    {
                        subject === "GK" &&
                        <img
                            className="rounded-t-lg h-44 w-full"
                            src={gk}
                            alt={video.title}
                        />
                    }
                </Link>
            }

            <div className="flex items-center justify-between">
                <div className="p-2 py-3">
                    {
                        title !== "Good habits and Bad habits" &&
                        <Link to={`/video/${subject}/${video.youtubeID}`}>
                            <h5 className="mb-2 text-md lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{video.title}</h5>
                        </Link>
                    }
                    {
                        title === "Good habits and Bad habits" &&
                        <Link to={`/quiz/${subject}/${video.youtubeID}`}>
                            <h5 className="mb-2 text-md lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{video.title}</h5>
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}