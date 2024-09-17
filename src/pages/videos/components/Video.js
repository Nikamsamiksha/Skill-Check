import React from 'react'
import maths from '../../../assets/maths.jpg';
import english from '../../../assets/english.jpg';
import rhymes from '../../../assets/rhymes.png';
import paintings from '../../../assets/paintings.png';
import { Link } from 'react-router-dom';

export const Video = ({ video, subject }) => {

    console.log(subject);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
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
            </Link>
            <div className="flex items-center justify-between">
                <div className="p-2 py-3">
                    <Link to={`/video/${subject}/${video.youtubeID}`}>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{ video.title }</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}