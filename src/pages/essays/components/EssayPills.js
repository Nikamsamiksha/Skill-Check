import React from 'react'
import { EssayPill } from './EssayPill';
import Slider from 'react-slick';

export const EssayPills = ({ currentEssay, setCurrentEssay }) => {
    const noe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = 0;

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "6px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            // console.log(
            //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            { /* <div>
                <Slider {...settings} >
                    {
                        noe.map(n => (
                            currentEssay === i++ ?
                                <EssayPill n={n} key={n} i={i} flag={true} setCurrentEssay={setCurrentEssay} />
                                :
                                <EssayPill n={n} key={n} i={i} flag={false} setCurrentEssay={setCurrentEssay} />
                        ))
                    }
                </Slider>
            </div> */ }
            <div className="lg:flex lg:flex-row lg:justify-start">
                {
                    noe.map(n => (
                        currentEssay === i++ ?
                            <EssayPill n={n} key={n} i={i} flag={true} setCurrentEssay={setCurrentEssay} />
                            :
                            <EssayPill n={n} key={n} i={i} flag={false} setCurrentEssay={setCurrentEssay} />
                    ))
                }
            </div> 
        </div>
    )
}