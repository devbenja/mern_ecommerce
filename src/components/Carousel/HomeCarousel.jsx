import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

const items = HomeCarouselData.map((item) =>
    <img
        src={item.image}
        role='presentation'
        className='img-carousel'
    />
);

export const HomeCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlayInterval={2000}
        disableButtonsControls
        autoPlay
        infinite
    />
);