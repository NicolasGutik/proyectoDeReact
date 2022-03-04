import './Home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <>
        <div className="fondo">
        <div class="containerT">
                <Link to="/Productos" style={{ textDecoration: 'none' }}>
                    <span className="titulo" >GemStore</span>
                </Link>
        </div>
        </div>
        </>
    )
}

export default Home