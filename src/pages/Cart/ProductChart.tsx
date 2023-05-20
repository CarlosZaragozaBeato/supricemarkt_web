import { Producto } from "../../model/Producto";


function ProductChar(item:Producto){

    return (
        <div className="product_item product_cart">
            <div className="product_item_header">
                <img src={item.image} alt={item.nombre}/>
                <div>
                    <h3>{item.nombre}</h3>
                    <p>{item.precio}</p>
                </div>
            </div>

            <button onClick={()=>{}}>Añadir</button>
        </div>
    );


}
export default ProductChar;