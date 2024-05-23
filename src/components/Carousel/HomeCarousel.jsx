import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

const items = HomeCarouselData.map((item) =>
     <img 
        src={item.image} 
        role='presentation'

    />
);

export const HomeCarousel = () => (
    <div className="relative h-64 lg:h-full">
        <AliceCarousel
            items={items}
            autoPlayInterval={2000}
            disableButtonsControls
            autoPlay
            infinite
        />
        <div className="absolute top-1/2 left-10 lg:left-40 transform -translate-y-1/2 p-4">
            <h2 className='text-sm lg:text-3xl font-bold text-justify'>Explore, Find, Enjoy: Your Virtual Marketplace</h2>
            <button className="mt-4 bg-indigo-600 text-white py-1 px-6 rounded">Start Exploring</button>
        </div>
    </div>
);