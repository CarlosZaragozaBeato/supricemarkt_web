import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AhorraMasPrd, CarrefourPrd, DiaPrd, ProductsContext, supermercadoType, tipos } from './Context/Context';
import Home from './pages/home/Home';
import { ROUTES } from './util/Routes';
import HomeImage from './static/images/home.png'
import CestaImage from './static/images/cesta.png'
import NavBar from './pages/Components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import { Producto } from './model/Producto';


function App() {

  const [route, setRoute] = useState<string>(ROUTES.HOME)
  const [items, setItems] = useState<boolean>(false)
  const [diaProducts, setDiaProducts] = useState<supermercadoType>(DiaPrd)
  const [carrefourProducts, setCarrefourProducts] = useState<supermercadoType>(CarrefourPrd)
  const [ahorraMasProducts, setAhorraMasProducts] = useState<supermercadoType>(AhorraMasPrd)
  const [ultimoProducto, setUltimoProducto] = useState<Producto|null>(null)
  const [listaProducts, setListaProducts] = useState<Producto[]> ([])
  const [totalPrecio, setTotalPrecio] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentId, setCurrentId] = useState<number>(0)


  let valores:tipos ={
    route:route,
    setRoute:setRoute,
    items:items,
    setItems:setItems,
    ahorraMasProducts:ahorraMasProducts,
    setAhorraMasProducts:setAhorraMasProducts,
    carrefourProducts:carrefourProducts,
    setCarrefourProducts:setCarrefourProducts,
    diaProducts:diaProducts,
    setDiaProducts:setDiaProducts,
    ultimoProducto:ultimoProducto,
    setUltimoProducto:setUltimoProducto,
    listaProducts:listaProducts, 
    setListaProducts:setListaProducts, 
    totalPrecio:totalPrecio,
    setTotalPrecio:setTotalPrecio,
    currentIndex:currentIndex,
    setCurrentIndex:setCurrentIndex,
    currentId:currentId,
    setCurrentId:setCurrentId
} 

  return (
    <>
      <Router>

        <ProductsContext.Provider value={valores}>
          <NavBar/>

          
          <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.CART} element={<Cart/>}/>
          </Routes>

          </ProductsContext.Provider>
      </Router>
    </>
  );
}

export default App;

export interface typeCards {
  nombre:string,
  route_param: string,
  image: string,
  color:string
}





export let cards:typeCards[] = [

  {
    nombre:"HOME",
    route_param:ROUTES.HOME,
    image:HomeImage,
    color:'#FFC4C4'
  },
  {
    nombre:"CART",
    route_param:ROUTES.CART,
    image: CestaImage,
    color:'#B2C8DF'
  }     
]
