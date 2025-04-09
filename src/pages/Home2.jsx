import "./Home.css";

const Home = () => {
    return (
        <>
            <header>
                <h1 className="site-title">Discover Ancient Egypt</h1>
                <p className="tagline">Navigate the Met's Egyptian treasures with enhanced search tools and gallery exploration features</p>
                <button className="cta-button">Start Exploring</button>
            </header>

            <section className="features" id="features">
                <div className="container">
                    <h2 className="section-title">Powerful Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <img src="/api/placeholder/400/180" alt="Advanced Search" className="feature-image" />
                            <div className="feature-content">
                                <h3 className="feature-title">Advanced Search & Filters</h3>
                                <p className="feature-description">Find exactly what you're looking for with enhanced filtering capabilities. Search by highlights, time period, keywords, and more.</p>
                                <a href="#" className="feature-link">Try Advanced Search →</a>
                            </div>
                        </div>
                        
                        <div className="feature-card">
                            <img src="https://images.metmuseum.org/CRDImages/eg/web-large/DP108489.jpg" alt="Gallery Explorer" className="feature-image" />
                            <div className="feature-content">
                                <h3 className="feature-title">Gallery Explorer</h3>
                                <p className="feature-description">Plan your museum visit with our gallery-by-gallery navigation. Browse artifacts as they appear in the actual Met Museum.</p>
                                <a href="#" className="feature-link">Explore Galleries →</a>
                            </div>
                        </div>
                        
                        <div className="feature-card">
                            <img src="/api/placeholder/400/180" alt="Visual Timeline" className="feature-image" />
                            <div className="feature-content">
                                <h3 className="feature-title">Visual Timeline</h3>
                                <p className="feature-description">Browse artifacts chronologically across Egyptian dynasties. Understand the evolution of art and culture through time.</p>
                                <a href="#" className="feature-link">View Timeline →</a>
                            </div>
                        </div>
                        
                        {/* <div className="feature-card">
                            <img src="/api/placeholder/400/180" alt="Educational Resources" className="feature-image" />
                            <div className="feature-content">
                                <h3 className="feature-title">Educational Resources</h3>
                                <p className="feature-description">Access object descriptions, historical context, and scholarly information about each artifact in the collection.</p>
                                <a href="#" className="feature-link">Learn More →</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="gallery-preview" id="gallery">
                <div className="container">
                    <h2 className="section-title">Gallery Explorer</h2>
                    <div className="gallery-content">
                        <div className="gallery-info">
                        <h3 >Plan Your Visit With Precision</h3>
                        <p>Our Gallery Explorer provides a virtual tour of the Met's Egyptian collection as it's arranged in the physical museum. Browse by gallery number, see detailed descriptions, and create a personalized tour based on your interests.</p>
                        <p>Features include:</p>
                        <ul>
                            <li>✓ Interactive gallery maps</li>
                            <li>✓ Objects sorted by gallery number</li>
                            <li>✓ Detailed gallery descriptions</li>
                            <li>✓ Custom tour creation tools</li>
                        </ul>
                        <button className="cta-button">Explore Gallery Map</button>
                    </div>
                    <div className="gallery-image">
                        <img src="/api/placeholder/500/350" alt="Gallery View" />
                    </div>
                    </div>
                </div>
            </section>

            <section className="coming-soon" id="games">
                <div className="container">
                    <h2 className="section-title">Coming Soon: Egyptian Knowledge Games</h2>
                    <p>Test your knowledge and learn more about ancient Egypt through interactive quizzes and minigames</p>
                    
                    <div className="games-container">
                        <div className="game-preview">
                            <div className="game-icon">?</div>
                            <h3 className="game-title">Hieroglyphic Challenge</h3>
                            <p>Test your knowledge of ancient Egyptian hieroglyphics with this interactive quiz game.</p>
                            <button className="notify-button">Notify Me</button>
                        </div>
                        
                        <div className="game-preview">
                            <div className="game-icon">♟️</div>
                            <h3 className="game-title">Dynasty Match</h3>
                            <p>Match artifacts to their correct Egyptian dynasty in this fast-paced memory game.</p>
                            <button className="notify-button">Notify Me</button>
                        </div>
                        
                        <div className="game-preview">
                            <div className="game-icon">🔍</div>
                            <h3 className="game-title">Artifact Detective</h3>
                            <p>Identify artifacts based on close-up details and historical clues.</p>
                            <button className="notify-button">Notify Me</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technical" id="tech">
                <div className="container">
                    <h2 className="section-title">Technical Highlights</h2>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <div className="tech-icon">🔌</div>
                            <h3>Met API Integration</h3>
                            <p>Seamless integration with the Metropolitan Museum's Collection API for real-time data access.</p>
                        </div>
                        
                        <div className="tech-item">
                            <div className="tech-icon">🔍</div>
                            <h3>Enhanced Search Algorithms</h3>
                            <p>Custom filtering algorithms that extend the Met's basic search capabilities.</p>
                        </div>
                        
                        <div className="tech-item">
                            <div className="tech-icon">🗺️</div>
                            <h3>Gallery Mapping System</h3>
                            <p>Sophisticated mapping of digital objects to physical museum locations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;