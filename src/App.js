//Componentes
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

// APRENDER=> sisi: spread operator, destructuring, promise (promesas), let, var, arrow functions, string como template literals, map, métodos de arrays (foreach, map, find, filter)



const App = () => {
  return (
      <header>
        <NavBar/>
        <ItemListContainer  greetings="Bienvenidos a GadgetsBay" />
        <ItemListContainer  greetings="Promociones todos los dias" />
      </header>
    
  );
}

export default App;
