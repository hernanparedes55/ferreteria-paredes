import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Contacto from './components/Contacto/Contacto';
import Carousel from './components/carousel/Carousel';
import React from 'react';
import Nosotros from './components/Nosotros/Nosotros';
//  import { getFirestore } from "./firebase/firebaseConfig";

function App() {
 
  
  return (
    
      <Router>
        <CartContextProvider>
          <div className="App">
            <NavBar/>

            <Switch>
                <Route exact path='/'>
                  <Carousel/>
                  <Cards/>
                  
                </Route>
                <Route exact path='/products'>
                  <ItemListContainer greeting='TODOS NUESTROS PRODUCTOS' item='item'/>
                </Route>
                <Route exact path='/category/:categoryId'> {/*"categoryId es un parametro dinamico que lo toma useParams() en ItemListContainer"*/}
                  <ItemListContainer/>
                </Route>
                <Route exact path='/item/:id'>
                  <ItemDetailContainer/>
                </Route>
                <Route exact path='/cart'>
                  <Cart/>
                </Route>
                <Route exact path='/contacto'>
                  <Contacto/>
                </Route>

                <Route exact path='/nosotros'>
                  <Nosotros/>
                </Route>
            </Switch>
            <Footer/>
            
          </div>
        </CartContextProvider>    
      </Router>
    
  );
}

export default App;