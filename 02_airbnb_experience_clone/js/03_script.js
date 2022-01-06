/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/


// 1
// function Contact(){
//     return(
//         <div className="contact-card">
//                 <img src="img/mr-whiskerson.png"/>
//                 <h3>Mr. Whiskerson</h3>
//                 <div className="info-group">
//                     <img src="img/phone-icon.png" />
//                     <p>(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="img/mail-icon.png" />
//                     <p>mr.whiskaz@catnap.meow</p>
//                 </div>
//             </div>
//     )
// }


// 2)
function Contact(props){ // props can be replaced by any word
    return(
        <div className="contact-card">
            <h3>{props.name}</h3>
            <img src={props.img}/>
            <div className="info-group">
                <img src="img/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="img/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="contacts">
            {/* 1 */}
            {/*         
            <div className="contact-card">
                <img src="img/mr-whiskerson.png"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="img/phone-icon.png" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="img/mail-icon.png" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="img/fluffykins.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="img/phone-icon.png" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="img/mail-icon.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="img/felix.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="img/phone-icon.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="img/mail-icon.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="img/pumpkin.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="img/phone-icon.png" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="img/mail-icon.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
             */}


            {/* 2 */}
             {/* <Contact/>
             <Contact/>
             <Contact/>
             <Contact/> */}

            {/* 3 */}
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


// 
// 
// Pop Quiz
// 
// 1. What do props help us accomplish?
// Make a component more reusable.


// 2. How do you pass a prop into a component?
// <MyAwesomeHeader title="???" />


// 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
// No, because the JSX we use to describe native DOM elements will
// be turned into REAL DOM elements by React. And real DOM elements
// only have the properties/attributes specified in the HTML specification.
// (Which doesn't include properties like `blahblahblah`)


// 4. How do I receive props in a component?
// function Navbar(props) {
//     console.log(props.blahblahblah)
//     return (
//         <header>
//             ...
//         </header>
//     )
// }


// 5. What data type is `props` when the component receives it?
// An object!