import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../../../App';
import { ProductsContext } from '../../../Context/Context';
import { ROUTES } from '../../../util/Routes';
import NavBarItem from './NavBarItem';
import './NavBar.css'

function NavBar() {

    const { route } = useContext(ProductsContext);



    return (
        <nav>  
                    {cards.map((item)=>(
                            <NavBarItem nombre={item.nombre}
                                    route_param={item.route_param}
                                     image={item.image}
                                     color={item.color}
                                     key={item.color}/>
                    ))}
        </nav>
    );
  }
  
  export default NavBar;
  