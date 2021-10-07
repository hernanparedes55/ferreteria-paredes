import React from 'react'
import Card from './Card';

import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.jpg';

const cards = [
    {
        id: 1,
        title: 'ESCALERA ARTICULADA 👷',
        image: producto1,
        text: '- 4 Tramos de 3 peldaños cada uno - Altura total 3.71m - Mas de 7 posiciones de uso',
        url: 'https://www.instagram.com/p/CMezSMQgYoo/'
        
    },
    {
        id: 2,
        title: '🖌️LATEX INTERIOR/EXTERIOR',
        image: producto2,
        text: '🔸 Trabajamos con las líneas Murella y Miura.🔸 Tarros de 20, 10 y 4 litros. 🔸 Excelente calidad!',
        url: 'https://www.instagram.com/p/CNIBr3anufM/'
    },
    {
        id: 3,
        title: 'ORDEADORA COBERPLAST 🌱',
        image: producto3,
        text: '🔸Mantené tu patio siempre lindo y prolijo. ➡️Uso doméstico!',
        url: 'https://www.instagram.com/p/CSMhs8dAnw6/'
    },
]

const Cards = () => {
    return (
        <div> 
            <h1 className="title-prod-dest"> Productos <span>Destacados</span> </h1>
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                        <Card 
                        title={card.title}
                        imageSource={card.image}
                        text= {card.text}
                        url={card.url}
                        />
                    </div>
                    ))
                }

            </div>
            </div>
        </div>
    );
}

export default Cards;
