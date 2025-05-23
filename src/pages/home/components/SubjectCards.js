import React from 'react'
import calculatorFill from '../../../assets/CalculatorFill.svg';
import alphabet from '../../../assets/Alphabet.svg';
import rhymes from '../../../assets/MusicNoteBeamed.svg';
import paintings from '../../../assets/Vector.svg';
import gk from '../../../assets/gk.svg';

import { SubjectCard } from '../../../components';

const subjects = [
  {
    "id": 1,
    "title": "Maths",
    "description": "Maths is a fun adventure where you play with numbers, shapes, and patterns to solve puzzles and explore the world around you!",
    "videos": 8,
    "img": calculatorFill,
  },
  {
    "id": 2,
    "title": "English",
    "description": "English is the magic of words, where you learn to read, write, and tell amazing stories that spark your imagination!",
    "videos": 5,
    "img": alphabet,
  },
  {
    "id": 3,
    "title": "Rhymes",
    "description": "Rhymes are like musical poems that you sing or say, with words that sound the same and make learning fun and playful!",
    "videos": 11,
    "img": rhymes,
  },
  {
    "id": 4,
    "title": "Paintings",
    "description": "Painting is all about using colors and brushes to create pictures and express your ideas on paper or canvas in your own unique way!",
    "videos": 16,
    "img": paintings,
  },
  {
    "id": 5,
    "title": "GK",
    "description": "Entertaining and educational GK videos for children, packed with fascinating facts, interactive quizzes, and vibrant animations to spark curiosity and make learning an enjoyable adventure!",
    "videos": 4,
    "img": gk,
  }
]

export const SubjectCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-5 mx-5 mb-2">
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className={subject.id === 5 ? "col-span-2 flex justify-center" : ""}
        >
          <SubjectCard subject={subject} />
        </div>
      ))}
    </div>


  )
}
