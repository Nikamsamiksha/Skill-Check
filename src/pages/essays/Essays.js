import React, { useState } from 'react';
import useEssays from '../../hooks/useEssays';
import { Essay } from './components/Essay';
import { EssayPills } from './components/EssayPills';
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search';

export const Essays = () => {
    const { essays } = useEssays();
    const [currentEssay, setCurrentEssay] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    // ✅ Filter essays safely
    const filteredEssays = searchQuery
        ? essays.filter(e =>
            (e.title || "").toLowerCase().includes(searchQuery.toLowerCase())
        )
        : essays;

    // ✅ Get the current essay safely
    const current = filteredEssays?.[currentEssay] || null;

    function nextEssay() {
        if (currentEssay + 1 < filteredEssays.length) {
            setCurrentEssay(prev => prev + 1);
        }
    }

    function prevEssay() {
        if (currentEssay > 0) {
            setCurrentEssay(prev => prev - 1);
        }
    }

    function handleSearch(query) {
        setSearchQuery(query);
        setCurrentEssay(0); // reset to the beginning of results
    }

    return (
        <main className='pt-5 lg:pt-5'>
            <div className='flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 px-5'>
                <Link to={`/`}>
                    <button className="bg-primary-100 px-3 py-2.5 rounded-lg">
                        Back To Home
                    </button>
                </Link>
                <Search onSearch={handleSearch} />
            </div>

            {
                filteredEssays && filteredEssays.length === 0 ?
                (
                    <div className='lg:pt-5 font-bold text-4xl'>No essays found!</div>
                )
                :
                (
                    <div>
                        <div className="px- 5 lg:px-0 lg:pt-5">
                            <EssayPills currentEssay={currentEssay} setCurrentEssay={setCurrentEssay} essays={filteredEssays}/>
                        </div>

                        <div className='px-5 lg:px-0'>
                            {current && <Essay essay={current} />}
                        </div>

                        <div className="flex flex-row justify-between mt-5 lg:mt-10 px-5 lg:px-0">
                            <button
                                className="bg-primary-300 px-3 py-2 text-md lg:px-5 lg:py-3 lg:text-xl text-center rounded-lg"
                                onClick={prevEssay}
                                disabled={currentEssay === 0}
                            >
                                Prev
                            </button>
                            <button
                                className="bg-primary-300 px-3 py-2 text-md lg:px-5 lg:py-3 lg:text-xl text-center rounded-lg"
                                onClick={nextEssay}
                                disabled={currentEssay + 1 >= filteredEssays.length}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )
            }
            
        </main>
    )
}
