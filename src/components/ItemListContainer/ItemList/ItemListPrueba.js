import React,{useEffect, useState} from 'react';

import producto1 from './../../assets/producto1.jpg'
import producto2 from './../../assets/producto2.jpg';
import producto3 from './../../assets/producto3.jpg';
import ItemPrueba from './Item/ItemPrueba';



const ItemListPrueba = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const items = [

            {
                id: 1,
                title: 'Escalera Articulada',
                image: producto1,
                description: 'ESCALERA ARTICULADA 👷 - 4 Tramos de 3 peldaños cada uno - Altura total 3.71m - Mas de 7 posiciones de uso',
                price: '$ 5000',
                pictureUrl: 'https://www.instagram.com/p/CMezSMQgYoo/',
                stock: 12
                
            },
            {
                id: 2,
                title: 'Producto 2',
                image: producto2,
                description: 'LATEX INTERIOR/EXTERIOR',
                price: '$ 3000',
                pictureUrl: 'https://www.instagram.com/p/CNIBr3anufM/',
                stock: 10
            },
            {
                id: 3,
                title: 'Producto 3',
                image: producto3,
                description: 'BORDEADORA COBERPLAST',
                price: '$ 2000',
                pictureUrl: 'https://www.instagram.com/p/CSMhs8dAnw6/',
                stock: 15
            },
            ]
            
            const getItemsDelay = (products) => {
                return new Promise((resolve, reject) =>{
                    setTimeout(() => {
                        resolve(products);
                    }, 2000)
                })
            }

            getItemsDelay(items)
            .then(result => setData(result))
            .catch(error => console.log(error))
            
        }, [])

            
       
    

    return (
        //Se ejecuta antes de desmontarse el componente
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            
                {   
                    data !== [] && data.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <ItemPrueba 
                            
                            title={product.title}
                            imageSource ={product.image}
                            description= {product.description}
                            price= {product.price}
                            url={product.pictureUrl}
                            stock={product.stock}
                            />
                            
                        </div>
                          )
                    )}

            
        </div>
    );
}

export default ItemListPrueba;
