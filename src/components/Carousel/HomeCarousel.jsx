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
    <div className="relative h-96 lg:h-128">
        <AliceCarousel
            items={items}
            autoPlay
            infinite
            autoPlayInterval={2000}
            disableDotsControls
            disableButtonsControls
        />
        <div className="absolute top-1/2 left-10 lg:left-40 transform -translate-y-1/2 p-4">
            <h2 className='text-2xl'>Tu título aquí</h2>
            <button className="mt-4 bg-indigo-600 text-white py-1 px-6 rounded">Buy</button>
        </div>
    </div>
);