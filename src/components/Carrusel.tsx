// Carrusel y su estilo por defualt
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//Components
import Card_AE from './Card_AE';

//Data
import first_cards from '../db/first_cards';

const responsive = {
    0: { items: 1 },    // Manera de muestreo por slide
    568: { items: 2 },
    1024: { items: 3 },
};


const Carrusel = () => (
    <AliceCarousel
        mouseTracking
        items={
            first_cards.map( item => (
                <Card_AE title={item.title} img={item.img} key={item.id}/>
            ))
        }
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true} // La animación es automática
        disableButtonsControls={true} // No muestra flechas para cambiar o atrasar
        infinite={true} // continua la animación en bucle
        animationDuration={2000} //duración
    />
);

export default Carrusel