import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../Context/Context";
import { Producto } from "../../../model/Producto";
import { Supermercado } from "../../../model/Supermercado";
import SuperMarket from "../Supermarket/SuperMarket";



function MainComponent() {





    const { diaProducts, carrefourProducts, ahorraMasProducts, ultimoProducto } = useContext(ProductsContext)


   
    return (
        <div className="main_component">
            <div className="main_header">

                {ultimoProducto!=null?(<h3>Ultimo Añadido: <span>{ultimoProducto.nombre}</span></h3>):""}
            </div>


            <SuperMarket listaProductos={diaProducts.listaProductos}
                supermercado={diaProducts.supermercado} />

            <SuperMarket listaProductos={carrefourProducts.listaProductos}
                supermercado={carrefourProducts.supermercado} />

            <SuperMarket listaProductos={ahorraMasProducts.listaProductos}
                supermercado={ahorraMasProducts.supermercado} />
        </div>
    );
}


export default MainComponent;