import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Producto } from "../../../model/Producto";
import Previous from "../../../static/images/izquierda.png"
import Next from "../../../static/images/derecha.png"
import Delete from "../../../static/images/borrar.png"
import { ProductsContext } from "../../../Context/Context";


type Props = {
  slides: Producto[];
};

const Carrousel: React.FC<Props> = ({ slides }) => {

  const { currentIndex, setCurrentIndex, listaProducts, setListaProducts,setTotalPrecio, totalPrecio} = useContext(ProductsContext);
  const [currentProduct, setCurrentProduct] = useState<Producto>(slides[currentIndex])




  function one_more(){
    if (currentIndex >= slides.length-1){
      setCurrentIndex(0)      
    }else{
      setCurrentIndex(currentIndex+1)
    }
    setCurrentProduct(slides[currentIndex])
  }
  function one_minus(){
    if (currentIndex <= 0){
      setCurrentIndex(slides.length-1)
    }else{
      setCurrentIndex(currentIndex-1)
    }
    setCurrentProduct(slides[currentIndex])
  }


  function removeElement(){
    let tlt = 0
    setTotalPrecio(0)
    
    let new_list = listaProducts.filter((it) => it.id !== currentProduct.id)
    new_list.map((item)=>{
      tlt += Math.round(Number(item.precio.replace("€","").replace(",",".")))
    }) 
    setTotalPrecio(Math.round(tlt))
    setListaProducts(new_list)

    setCurrentIndex(0)
    setCurrentProduct(slides[currentIndex])
  }


  return (
    <div className="image_producto">

      {currentProduct == null? ("asd"):(
        <>            <div>
            <p className="precio_producto">{currentProduct.precio}</p>

            <img src={Delete} alt="remove_item" onClick={removeElement} onDoubleClick={()=>{}} className="delete_producto"/>
            </div>
            <div>

                
                <div className="actions_container_flechas">
                  <img src={Previous} alt="proxima" onClick={()=>one_minus()} className="img_action"/>
                </div>
                <div className="product_image_container">
                <img src={currentProduct.image} alt={currentProduct.nombre} className="img_producto"/>
                <div className="carrousel_item">
                  <p>{currentIndex+1}-{listaProducts.length}</p>
                </div>
                </div>
                <div className="actions_container_flechas">
                  <img src={Next} alt="siguiente" onClick={one_more} className="img_action"/>
                </div>
            </div>
            <p className="nombre_producto">{currentProduct.nombre}</p>

      </>
      )}
      </div>
  );
};

export default Carrousel;
