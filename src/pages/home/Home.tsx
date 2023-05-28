import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ProductsContext, supermercadoType } from '../../Context/Context';
import { ROUTES } from '../../util/Routes';
import Lupa from '../../static/images/lupa.png'
import './home.css'
import MainComponent from '../Components/Main/MainComponent';
import InfoComponent from '../Components/Info/InfoComponent';
import { Grid } from 'react-loader-spinner'
import { Producto } from '../../model/Producto';
import Carrefour from '../../static/images/carrefour.png'



function Home() {


    const { setRoute, setItems, items, setDiaProducts,setCarrefourProducts ,setAhorraMasProducts, diaProducts, carrefourProducts, ahorraMasProducts} 
    = useContext(ProductsContext);
    const [producto, setProduto] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)

    //setItems(true)

    setRoute(ROUTES.HOME)


    function handleProducto(event: React.ChangeEvent<HTMLInputElement>) {
        setProduto(event.target.value);
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getAllData() {

        if (producto.length !== 0) {
            setLoading(true)
            await axios
                .get(`http://127.0.0.1:8000/main/api/search?producto=${producto}`)
                .then((response) => {
                    let dia:supermercadoType = {
                        listaProductos:pasarJson(response.data[0]),
                        supermercado: {
                            nombre: "Día",
                            web: "https://www.dia.es/compra-online/",
                            image: 'https://www.dia.es/home-front/assets/1-10-4/logo-dia.svg',
                          }
                    
                        }
                    let carrefour:supermercadoType = {
                        listaProductos:pasarJson(response.data[1]),
                        supermercado: {
                            nombre: "Carrefour",
                            web: "https://www.carrefour.es/?gclid=CjwKCAjwzuqgBhAcEiwAdj5dRrWaKe6kjy0ngHn23L15Mo9DSnoBxabHSbjgvOwoSA_Bs2TXC-t76xoCMckQAvD_BwE&gclsrc=aw.ds",
                            image: Carrefour,
                          },
                    }
                    let ahorraMas:supermercadoType = {
                        listaProductos:pasarJson(response.data[2]),
                        supermercado:{
                            nombre: "Ahorra Mas",
                            web: "https://www.ahorramas.com/",
                            image: 'https://www.ahorramas.com/on/demandware.static/Sites-Ahorramas-Site/-/default/dwb9ae299d/images/logo.svg',
                          },
                    }
                    setDiaProducts(dia)
                    setCarrefourProducts(carrefour)
                    setAhorraMasProducts(ahorraMas)
                    console.log(response.data)
                    setItems(true);
                    setLoading(false);
                })
                .catch((e) => { console.error(e)});
        }
    }


    function pasarJson(response:tiposObject[]){
        
        let lista: Producto[] = []

        
        response.map((item)=>{
            let producto:Producto = {
                id:0,
                nombre:item['0'],
                precio:item['1'],
                image:item['2']
            }
            lista.push(producto)
        });

        return lista;
    }

    type tiposObject = {
        0:string,
        1:string,
        2:string
    }


    return (
        <main>
            <div className="search">
                <div>
                    <input type="text" onChange={handleProducto} 
                            placeholder="Buscar Producto..."/>
                    <button onClick={getAllData}>
                        <img src={Lupa} alt="Search" />
                    </button>
                </div>
            </div>


            {


                loading ? 
                <div className='busqueda_section'>
                    <Grid
                        height="80"
                        width="80"
                        color="#E49393"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        visible={true}/>
                    <h3>Buscando</h3>
                </div> 
                : items ? <MainComponent />: <InfoComponent />
            }
        </main>
    );
}

export default Home;
