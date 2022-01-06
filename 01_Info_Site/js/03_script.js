// Jsx- javascript xml
// flavour of js that looks a lot like html
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)



// const element = <h1 className="header">This is JSX</h1>
// console.log(element)
// JSX
// ReactDOM.render(element, document.getElementById("root"))

// jsx renders only one parent element
// wrong
// ReactDOM.render(<h1 className="header">This is JSX</h1><p>para</p></p>, document.getElementById("root"))
// right 


const page = ( 
    <div>
        <h1 className="header">This is JSX</h1>
        <p>para</p>
    </div>
    )
    console.log(page)
ReactDOM.render(page, document.getElementById("root"))


/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(nav,document.querySelector("#root"))