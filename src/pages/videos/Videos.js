import React, { useEffect, useState } from 'react'
import useVideoList from '../../hooks/UseVideoList';
import { useParams } from 'react-router-dom';
import { Video } from './components/Video';

export const Videos = () => {
    const [page, setPage] = useState(1);
    const { error, videos } = useVideoList(page);
    // const [searchParams] = useSearchParams();
    // const subject = searchParams.get("name");
    
    const { subject } = useParams();
    
    useEffect(() => {
        console.log(videos)
    },[videos]);
    
    return (
        <main className='grid grid-cols-2 lg:grid-cols-3 mt-80'>
            {
                videos && videos.length !== 0 && subject === "English" &&
                videos[0].map(video => 
                    <Video key={video.id} video={video} subject={subject}/>
                ) 
            }
            {
               videos && videos.length !== 0 && subject === "Maths" &&
                videos[1].map(video => 
                    <Video key={video.id} video={video} subject={subject}/>
                )
            }
            {
                videos && videos.length !== 0 && subject === "Rhymes" &&
                videos[3].map(video => 
                    <Video key={video.id} video={video} subject={subject}/>
                ) 
            } 
            {
                videos && videos.length !== 0 && subject === "Paintings" &&
                videos[2].map(video => 
                    <Video key={video.id} video={video} subject={subject}/>
                ) 
            }     
        </main>
    )
}