import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import img from '../assets/Logo-Pagina2.png';
import {NavLink} from 'react-router-dom';


const NavBar =()=>{
return(
<nav className="Navigation">

    <img src={img} id="imgLogoPagina" alt='logo-pagina'/>

    <ul className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Productos">Productos</NavLink>
    </ul>

        <NavLink to="/Carrito" style={{ textDecoration: 'none' }}><CartWidget/></NavLink>
</nav>)
};

export default NavBar;

