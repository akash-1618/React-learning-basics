function Navbar(){
    return(
        <nav className="nav">
            <div className="container">
                <img className="nav--logo" src="./img/airbnb-logo.png" alt="Navbar logo"/>
            </div>
        </nav>
    )
}

function Hero(){
    return(
        <section className=" column container">
            <img className="hero--img" src="./img/photo-grid.png" alt="Hero Image"/>
            <div className="hero--content">
                <h2 className="hero--title">Online Experiences</h2>
                <div className="hero--para">
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </section>
    )
}

// 1)
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card(){
    return(
        <div className="card">
            <img src="./img/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="./img/star.png" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

function App(){
    return(
        <div className="app">
            <Navbar />
            {/* <Hero /> */}
            <Card/>
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"))