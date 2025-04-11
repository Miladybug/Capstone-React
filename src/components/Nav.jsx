import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark shadow">
            <NavLink className="navbar-brand px-3" id="main-logo" to='/'>
                {/* Logo */}
                <span className="text-light">Egyptian Museum</span>
            </NavLink>
            <div className="bg-dark text-light pb-2" id="navbarNav">
                <ul className="navbar-nav text-nowrap text-light d-flex flex-row">
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/' end>Home</NavLink>
                    </li>
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/collection' end>Collection</NavLink>
                    </li>
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/galleries' end>Galleries</NavLink>
                    </li>
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/timeline' end>Timeline</NavLink>
                    </li>
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/games' end>Games</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;