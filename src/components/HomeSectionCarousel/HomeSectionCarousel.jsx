import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

export const HomeSectionCarousel = ({ data, sectionName }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4 },
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

    const slideNext = () => setActiveIndex(activeIndex + 1);
    const slidePrev = () => setActiveIndex(activeIndex - 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className=''>
            <h2 className='text-xl font-bold px-4 mb-6'>{sectionName}</h2>
            <div className='relative p-2 pl-10 border border-gray-200 rounded-lg'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 &&
                    <Button
                        variant='contained'
                        className='z-50'
                        sx={{ position: 'absolute', top: '9rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }}
                        aria-label='next'
                        onClick={slideNext}
                    >
                        <KeyboardArrowLeft sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                }

                {activeIndex !== 0 &&
                    < Button variant='contained' className='z-50'
                        sx={{ position: 'absolute', top: '9rem', left: '0rem', transform: 'translateX(-50%) rotate(90deg)', bgcolor: 'white' }}
                        aria-label='prev'
                        onClick={slidePrev}
                    >
                        <KeyboardArrowLeft sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                    </Button>
                }
            </div>
        </div >
    )
}
