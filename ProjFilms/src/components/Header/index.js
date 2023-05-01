import "./Header.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PagCad() {
    const location = useLocation();
    if (location.pathname === "/cadaster") {
        return <button type="button" class="btn btn-primary" id="btHollow">...</button>
    }
    return <button type="button" class="btn btn-primary">Cadastro</button>
}

export default function Header() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-decoration none">
                    <li> <a class="nav-link px-2 link-dark"> <Link to='/'><div><img src={'/assets/images/logo.png'} className="nav-bar-image" width="100" height="100" alt="" /> </div></Link></a></li>
                    <li><a class="nav-link px-2 link-dark"><Link to='/'><div class="nav-bar-edit">Home</div></Link></a></li>
                    <li><a class="nav-link px-2 link-dark"><li> <Link to='/plans'><div class="nav-bar-edit">Planos</div></Link> </li></a></li>
                    <li><a class="nav-link px-2 link-dark"><Link to='/about/gustavo'><div class="nav-bar-edit">Sobre</div></Link> </a></li>
                </ul>
                <div class="col-md-3 text-end">
                    <div>
                        <button type="button" class="btn btn-outline-primary me-2">Login</button>
                        <Link to='/cadaster'><PagCad /></Link>
                    </div>

                </div>
            </header>
        </div>
    )
};