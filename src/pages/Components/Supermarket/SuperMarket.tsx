
import { supermercadoType } from "../../../Context/Context";

import ProductsItem from "./ProductsItem";



function SuperMarket(item:supermercadoType){





    return(
        <div className="super_item">
            <div className="super_header">
                <div className="super_header_info"> 
                    <img src={item.supermercado.image} alt={item.supermercado.nombre}/>
                    <h2>{item.supermercado.nombre}</h2>
                </div>
                <a href={item.supermercado.web} target="_blank">WEB</a> 
            </div>

            {
                item.listaProductos.map((itm)=>(
                    <ProductsItem producto={itm}
                                    supermercado={item.supermercado.nombre}/>
                ))
            }
        </div>
    );
}

export default SuperMarket;