import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../../../Context/Context";
import { Producto } from "../../../model/Producto"



function ProductsItem(item:typeProducts){

    const { setUltimoProducto, setListaProducts, listaProducts,setTotalPrecio, totalPrecio,setCurrentId,  currentId} = useContext(ProductsContext);

    function AddProducts(){
        setUltimoProducto(item.producto)

        let prd:Producto = {
          id:currentId,
          nombre:item.producto.nombre,
          precio:item.producto.precio,
          image:item.producto.image
        }
        setCurrentId(currentId+1)

        setListaProducts([...listaProducts, prd])
        let tlt = totalPrecio+Math.round(Number(item.producto.precio.replace("€","").replace(",",".")))
        setTotalPrecio(Math.round(tlt))

        
        // const informacion = {
        //     nombre: item.producto.nombre,
        //     precio: item.producto.precio,
        //     image: item.producto.image,
        //     supermercado:item.supermercado
        //   };

        //   axios.post('http://127.0.0.1:8000/sql/api/insert', informacion, {
        //   }).then(response => {
        //     console.log(response);
        //   }).catch(error => {
        //     console.log(error);
        //   });
    }


    return (
        <div className="product_item">
            <div className="product_item_header">
                <img src={item.producto.image} alt={item.producto.nombre}/>
                <div>
                    <h3>{item.producto.nombre}</h3>
                    <p>{item.producto.precio}</p>
                </div>
            </div>

            <button onClick={AddProducts}>Añadir</button>
        </div>

    )
}

export interface typeProducts {
    supermercado:string,
    producto: Producto,
  }

export default ProductsItem