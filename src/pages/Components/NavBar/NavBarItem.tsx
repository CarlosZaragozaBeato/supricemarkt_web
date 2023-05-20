import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../Context/Context';
import CSS from 'csstype';
import { typeCards } from '../../../App';
import './NavBar.css'

function NavBarItem ({nombre,route_param,image,color}:typeCards) {

    const { route} = useContext(ProductsContext);


    const styles: CSS.Properties = {
        backgroundColor: color
      };

    return (
        <Link to={route_param}>
            <div style={styles} className={`navbar_item ${route===route_param?`nav_extra`:``}`}>
                <img src={image} alt={nombre}/>
                <p>{nombre}</p>
            </div>

        </Link>
    );
  }
  
  export default NavBarItem;
  