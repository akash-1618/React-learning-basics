
//Destructring the props
function Contact({img, name, phone, email}){ //can't replace 'img' with 'image' as the name of the prop should be exactly as it was passed originally
    return(
        <div className="contact-card">
            <h3>{name}</h3>
            <img src={img}/>
            <div className="info-group">
                <img src="img/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="img/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="img/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="img/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="img/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="img/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
