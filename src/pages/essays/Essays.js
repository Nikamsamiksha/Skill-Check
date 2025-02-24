import React, { useState } from 'react'
import useEssays from '../../hooks/useEssays';
import { Essay } from './components/Essay';
import { EssayPills } from './components/EssayPills';
import { Link } from 'react-router-dom';

export const Essays = () => {
    const { loading, error, essays } = useEssays();

    const [currentEssay, setCurrentEssay] = useState(0);

    // handle when user clicks the next button to get the next question
    function nextEssay() {
        if (currentEssay + 1 < essays.length) {
            setCurrentEssay((prevCurrent) => prevCurrent + 1);
        }
    }

    // handle when user clicks the prev button to get back to the previous question
    function prevEssay() {
        if (currentEssay >= 1 && currentEssay <= essays.length) {
            setCurrentEssay((prevCurrent) => prevCurrent - 1);
        }
    }

    return (
        <main className='pt-5 lg:pt-5'>
            <Link to={`/`}>
                <button
                    className="bg-primary-100 px-3 py-2.5 rounded-lg"
                >
                    Back To Home
                </button>
            </Link>
            <div className="px-5 lg:px-0 lg:pt-5">
                {
                    <EssayPills currentEssay={currentEssay} setCurrentEssay={setCurrentEssay} />
                }
            </div>
            <div className='px-5 lg:px-0'>
                {
                    essays && <Essay essay={essays[currentEssay]} />
                }
            </div>
            <div className="flex flex-row justify-between mt-5 lg:mt-10 px-5 lg:px-0">
                <button
                    className="bg-primary-300 px-3 py-2 text-md lg:px-5 lg:py-3 lg:text-xl text-center rounded-lg"
                    onClick={() => prevEssay()}
                >
                    Prev
                </button>
                <button
                    className="bg-primary-300 px-3 py-2 text-md lg:px-5 lg:py-3 lg:text-xl text-center rounded-lg"
                    onClick={() => nextEssay()}
                >
                    Next
                </button>
            </div>
        </main>
    )
}
