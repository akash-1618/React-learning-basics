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

function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={`./img/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="./img/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

function App(){
    return(
        <div className="app">
            <Navbar />
            {/* <Hero /> */}
            <Card img="katie-zaferes.png" rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} />
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"))