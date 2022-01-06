// 1)
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

function Navbar(){
    return(
        <nav className="nav">
            <div className="container">
                <img className="nav--logo" src="./img/airbnb-logo.png" alt="Navbar logo"/>
            </div>
        </nav>
    )
}

// 2)
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

function Hero(){
    return(
        <section className=" column container">
            <img className="hero--img" src="./img/photo-grid.png" alt="Hero Image"/>
            <div className="hero--content">
                <h2 className="hero--title">Online Experiences</h2>
                <div className="hero--para">
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
                </div>
            </div>
        </section>
    )
}

function App(){
    return(
        <div className="app">
            <Navbar />
            <Hero />
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"))