import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-primary border-bottom border-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">Rokeya's World</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/Skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 bg-light-subtle" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;