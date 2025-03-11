import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark shadow fixed-top">
            <NavLink className="navbar-brand px-3" id="main-logo" to='/'>
                {/* Logo */}
                <span className="text-light">Egyptian Museum</span>
            </NavLink>
            <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse bg-dark text-light pb-2" id="navbarNav">
                <ul className="navbar-nav text-nowrap text-light">
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
                        <NavLink className="nav-link text-light" to='/exhibits' end>Exhibits</NavLink>
                    </li>
                    <li className="nav-item px-3 mt-2">
                        <NavLink className="nav-link text-light" to='/quizzes' end>Quizzes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;