import Supermarket from '../../../static/images/people_supermarket.png'


function InfoComponent(){

    return(
        <div className="info_container">
            <div className='info_header'>
                <h1>FUNCIONES</h1>
                <img src={Supermarket} alt="Supermarket image"/>
            </div>
            <ul>
                <li className="main_child">En la aplicación, podrás buscar productos en tres supermercados diferentes.
                    <ul>
                        <li>Ahorra Mas</li>
                        <li>Carrefour</li>
                        <li>Día</li>
                    </ul>
                </li>

                <li className="main_child">Principalmente, podrás buscar los productos por su nombre y la aplicación se encargará de buscar en los distintos supermercados los productos que coincidan con el nombre insertado.</li>
                <li className="main_child">Tendrás la opción de buscar el producto por su código EAN, sin embargo, esta función solo estará disponible en los supermercados Carrefour y Día.</li>
            </ul>
            

        </div>
    );


}

export default InfoComponent;