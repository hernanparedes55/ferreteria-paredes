import React from 'react';
import { Link } from "react-router-dom";


const ItemPrueba = ({id,title, imageSource, description, price, pictureUrl,stock }) => {

    // const value = useContext(DataContext);
    // const addCarrito = value.addCarrito;

    return (
       <div style={{margin:'50px 20px', width:'400px', height:'400px'}}>
       <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
           <img src={imageSource} className="card-img-top "/>
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {
            description ? description : 'No existe descripción del producto'
            }
          </p>
          
          <p> {price} </p>

          <p> {stock} </p>
          </div>
          {/* <div className="bottom">
            <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button> */}
            <div>
              <Link to={`/item/${id}`} className="text-decoration-none text-light">Vista</Link>
              </div>
          {/* </div> */}
        
        
      
      </div>
      </div>
    );
}

export default ItemPrueba
