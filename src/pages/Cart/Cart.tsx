import React, { useContext, useState, useEffect} from 'react';
import { ProductsContext } from '../../Context/Context';
import { ROUTES } from '../../util/Routes';
import ProductChar from './ProductChart';
import './Cart.css'
import ImageCarousel from '../Components/Carrousel/Carrousel';
import Carrousel from '../Components/Carrousel/Carrousel';

function Cart() {
    const { setRoute, listaProducts,totalPrecio} = useContext(ProductsContext);
    setRoute(ROUTES.CART)

    return (
        <main className='main_cart'>  
        <div className="cart_container">
            <h2 className='title_cart'>LISTA DE LA COMPRA</h2>
            <h2 className='total_cart'>TOTAL: {totalPrecio}€</h2>
        </div>
            {
            listaProducts.length === 0? (<h1 className='no_products'>No hay productos en el carrito</h1>) :
            <Carrousel slides={listaProducts}/>
            }
        </main>
    );
  }
  
  export default Cart;
  