// import data from './data'

const data = [{
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
    price: 136,
    coverImg: "katie-zaferes.png",
    stats: {
        rating: 5.0,
        reviewCount: 6
    },
    location: "Online",
    openSpots: 0,
},
{
    id: 2,
    title: "Learn Wedding Photography",
    description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: "wedding-photography.png",
    stats: {
        rating: 5.0,
        reviewCount: 30
    },
    location: "Online",
    openSpots: 27,
},
{
    id: 3,
    title: "Group Mountain Biking",
    description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: "mountain-bike.png",
    stats: {
        rating: 4.8,
        reviewCount: 2
    },
    location: "Norway",
    openSpots: 3,
}
]

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
const cards = data.map(item => {
        return <Card 
                key={item.id}
                item={item}
                // img={item.img} 
                // rating={item.rating}
                // reviewCount={item.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
                
            />
    })
function Card(props){
    
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./img/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./img/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}



function App(){
    return(
        <div className="app">
            <Navbar />
            <Hero />
            {/* <Card img="katie-zaferes.png" rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} /> */}
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"))