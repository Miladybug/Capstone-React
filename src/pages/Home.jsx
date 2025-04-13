import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
        {/* Hero Section */}
            <div className="my_header d-flex flex-column justify-content-center align-items-center text-center text-light">
                <h1 className>Discover Ancient Egypt: The Met Collection Explorer</h1>
                <p className="px-5 py-2">Navigate the Met's Egyptian treasures with enhanced search tools and gallery exploration features</p>
                <button>Start Exploring</button>
            </div>
            {/* Key Features Section */}
            <div className="py-5 px-0 features">
                <h2 className="text-primary text-center">Powerful Features</h2>
                <div className="d-flex flex-wrap justify-content-around p-3">
                    <div className="card m-2 pb-0">
                        <img className="card-img-top" src="https://images.metmuseum.org/CRDImages/eg/original/DP263833.jpg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Advanced Search & Filters</h3>
                            <p className="cart-text">Find exactly what you're looking for with our enhanced filtering system</p>
                            <NavLink to="/collection" className="feature-link text-danger">Try Advanced Search →</NavLink>
                        </div>
                    </div>
                    <div className="card m-2 pb-0 col-sm-12 col-md-6">
                        <img className="card-img-top" src="https://images.metmuseum.org/CRDImages/eg/web-large/DP108489.jpg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Gallery Explorer</h3>
                            <p className="cart-text">Plan your museum visit with our gallery-by-gallery navigation</p>
                            <NavLink to="/galleries" className="feature-link text-danger">Explore Galleries →</NavLink>
                        </div>
                    </div>
                    <div className="card m-2 pb-0 col-sm-12 col-md-6">
                        <img className="card-img-top" src="https://images.metmuseum.org/CRDImages/eg/original/DP248749.jpg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Visual Timeline</h3>
                            <p className="cart-text">Browse artifacts chronologically across Egyptian dynasties</p>
                            <NavLink to="/timeline" className="feature-link text-danger">View Timeline →</NavLink>
                        </div>
                    </div>
                    <div className="card m-2 pb-0 col-sm-12 col-md-6">
                        <img className="card-img-top" src="https://images.metmuseum.org/CRDImages/eg/original/LC-2021_41_143_EGDP032819.jpg" alt="" />
                        <div className="card-body">
                            <h3 className="card-title">Egyptian Knowledge Games</h3>
                            <p className="cart-text">Test your knowledge with our quizzes and minigames</p>
                            <NavLink to="/games" className="feature-link text-danger">Play →</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;