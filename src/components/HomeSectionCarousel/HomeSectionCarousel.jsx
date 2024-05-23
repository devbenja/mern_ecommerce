import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';

export const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className=''>
            <div className='relative p-2 pl-10'>
                <AliceCarousel
                    items={items}
                    autoPlayInterval={2000}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                />
                <Button 
                    variant='contained' 
                    className='z-50' 
                    sx={{position: 'absolute', top: '9rem', right: '0rem', transform:'translateX(50%) rotate(90deg)', bgcolor:'white'}}
                    aria-label='next'
                >
                    <KeyboardArrowLeft sx={{transform:'rotate(90deg)', color: 'black'}}/>
                </Button>

                <Button variant='contained' className='z-50' 
                    sx={{position: 'absolute', top: '9rem', left: '0rem', transform:'translateX(-50%) rotate(90deg)', bgcolor:'white'}}
                    aria-label='prev'
                >
                    <KeyboardArrowLeft sx={{transform:'rotate(-90deg)', color: 'black'}}/>
                </Button>
            </div>
        </div>
    )
}
