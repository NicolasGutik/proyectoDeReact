//Componentes
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

// APRENDER=> sisi: spread operator, destructuring, promise (promesas), let, var, arrow functions, string como template literals, map, métodos de arrays (foreach, map, find, filter)




const App = () => {
  return (
    <>
      <header>
        <NavBar/>
        <ItemListContainer  greetings="Bienvenidos a GadgetsBay" />
      </header>
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
