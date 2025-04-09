import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext';
import { LoginModal } from '../../../components/LoginModal';
import { TextToSpeech } from '../../../components/TextToSpeech';

export const SubjectCard = ({ subject }) => {

    let className, classNameMd;

    switch (subject.title) {
        case "Maths":
            className = `flex justify-between bg-primary-100 rounded-lg shadow hidden lg:flex lg:flex-row cursor-pointer`
            classNameMd = `flex justify-between bg-primary-100 rounded-lg shadow lg:hidden cursor-pointer`
            break;
        case "English":
            className = `flex justify-between bg-primary-200 rounded-lg shadow hidden lg:flex lg:flex-row cursor-pointer`
            classNameMd = `flex justify-between bg-primary-200 rounded-lg shadow lg:hidden cursor-pointer`
            break;
        case "Rhymes":
            className = `flex justify-between bg-primary-300 rounded-lg shadow hidden lg:flex lg:flex-row cursor-pointer`
            classNameMd = `flex justify-between bg-primary-300 rounded-lg shadow lg:hidden cursor-pointer`
            break;
        case "Paintings":
            className = `flex justify-between bg-primary-400 rounded-lg shadow hidden lg:flex lg:flex-row cursor-pointer`
            classNameMd = `flex justify-between bg-primary-400 rounded-lg shadow lg:hidden cursor-pointer`
            break;
        case "GK":
            className = `flex justify-between bg-primary-700 rounded-lg shadow hidden lg:flex lg:flex-row cursor-pointer`
            classNameMd = `flex justify-between bg-primary-700 rounded-lg shadow lg:hidden cursor-pointer`
            break;
        default:
            className = `flex justify-between bg-primary-500 rounded-lg shadow hidden lg:flex lg:flex-row`
            classNameMd = `flex justify-between bg-primary-500 rounded-lg shadow lg:hidden cursor-pointer`
            break;
    }
    const { currentUser } = useAuth();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function checkLogin(subjectTitle) {
        currentUser ? navigate(`/${subjectTitle}`) : setShow(!show);
    }

    return (
        <>
            <div className={className} >
                <div className="flex flex-col p-3 lg:p-5 lg:w-3/6 justify-start">
                    <div className='flex flex-row items-center'>
                        <h5 onClick={() => checkLogin(subject.title)} className="mb-2 text-4xl font-bold tracking-tight text-gray-900 self-start">{subject.title}</h5>
                        <TextToSpeech text={subject.title + subject.description} />
                    </div>
                    <p className="mb-3 font-normal text-gray-700 self-start">{subject.videos} videos</p>
                    <div className="mb-3 text-lg font-normal text-black">{subject.description}</div>
                </div>
                <div className='p-10 w-3/6'>
                    <img className="w-min h-48 rounded-t-lg" src={subject.img} alt={subject.title} />
                </div>
            </div>
            <div onClick={() => checkLogin(subject.title)} className={classNameMd}>
                <div className="flex flex-col p-2">
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">{subject.title}</h5>
                            <p className="mb-1 font-normal text-gray-700">{subject.videos} videos</p>
                        </div>
                        <div className='px-3 w-3/6'>
                            <img className="w-min h-16 rounded-t-lg" src={subject.img} alt={subject.title} />
                        </div>
                    </div>
                    <p className='text-sm text-black'>{subject.description}</p>
                </div>
            </div>
            {
                show &&
                <LoginModal show={show} setShow={setShow} />
            }
        </>

    )
}