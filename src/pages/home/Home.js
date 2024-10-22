import React from 'react'
import { SubjectCards } from './components/SubjectCards'
import { FeatureCards } from './components/FeatureCards'
import ReactPlayer from 'react-player';

export const Home = () => {
  const introductionUrl = require('../../assets/introduction_gif.mp4');

  return (
    <main className='flex flex-col'>
      <ReactPlayer
        className="lg:aspect-ratio m-0 lg:m-2 self-center lg:mt-10 h-[20px] lg:h-[360px]"
        url={introductionUrl}
        width="90%"
        playing={true}
        loop={true}
        controls={false}
        muted={true}
      />
      <SubjectCards />
      <FeatureCards />
    </main>
  )
}