import React from 'react'
import { SubjectCards } from './components/SubjectCards'
import { FeatureCards } from './components/FeatureCards'

export const Home = () => {
  return (
    <main>
      <SubjectCards />
      <FeatureCards />
    </main>
  )
}