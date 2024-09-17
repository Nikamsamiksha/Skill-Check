import React, { useState } from 'react'
import useEssays from '../../hooks/useEssays';
import { Essay } from './components/Essay';
import { EssayPills } from './components/EssayPills';

export const Essays = () => {
    const { loading, error, essays } = useEssays();
    // console.log(essays)

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
        <main className='pt-10'>
            <div className="pt-5">
                {
                    <EssayPills />
                }
            </div>
            {
                essays && <Essay essay={essays[currentEssay]} />
            }
            <div className="flex flex-row justify-between mt-10">
                <button
                    className="bg-primary-400 px-5 py-3 text-xl text-center rounded-lg"
                    onClick={() => prevEssay()}
                >
                    Prev
                </button>
                <button
                    className="bg-primary-400 px-5 py-3 text-xl text-center rounded-lg"
                    onClick={() => nextEssay()}
                >
                    Next
                </button>
            </div>
        </main>
    )
}
