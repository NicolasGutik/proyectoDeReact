//Componentes
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Productos from './views/Productos'
import Home from './views/Home'
import Carrito from './views/Carrito'
import Footer from './componentes/Footer/Footer'
import Shop from './views/Shop'
import { CartContextProvider } from './componentes/Context/CartContext';
// APRENDER=> sisi: spread operator, destructuring, promise (promesas), let, var, arrow functions, string como template literals, map, métodos de arrays (foreach, map, find, filter)




const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/detail/:ItemId" element={<ItemDetailContainer/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/Shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </CartContextProvider>
    </>
  );
}




/* class App extends Component {
  contructor(){
    super();
    this.state = {
      counter: 0,
    };
  }
}

 */


export default App;

