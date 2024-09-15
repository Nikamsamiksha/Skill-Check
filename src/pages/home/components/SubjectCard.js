import React from 'react'
import { Link } from 'react-router-dom'

export const SubjectCard = ({ subject }) => {

    let className;

    switch (subject.title) {
        case "Maths":
            className = `flex flex-col justify-between bg-primary-100 rounded-lg shadow lg:flex-row`
            break;
        case "English":
            className = `flex flex-col justify-between bg-primary-200 rounded-lg shadow lg:flex-row`
            break;
        case "Rhymes":
            className = `flex flex-col justify-between bg-primary-300 rounded-lg shadow lg:flex-row`
            break;
        case "Paintings":
            className = `flex flex-col justify-between bg-primary-400 rounded-lg shadow lg:flex-row`
            break;
        default:
            className = `flex flex-col justify-between bg-primary-500 rounded-lg shadow lg:flex-row`
            break;
    }

    return (
        <Link to={`/subject?name=${subject.title}`} className={className}>
            <div className="flex flex-col p-3 lg:p-5 lg:w-3/6">
                <h5 className="lg:mb-2 text-xl lg:text-4xl font-bold tracking-tight text-gray-900">{subject.title}</h5>
                <p className="mb-1 lg:mb-3 font-normal text-gray-700">{subject.videos} videos</p>
                <p className='lg:mb-3 text-xs lg:text-lg lg:font-normal text-black'>{subject.description}</p>
            </div>
            <div className='px-3 pb-3 lg:p-10 lg:w-3/6'>
                <img className="w-min h-20 lg:h-48 rounded-t-lg" src={subject.img} alt={subject.title} />
            </div>
        </Link>
    )
}