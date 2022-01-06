// 1)
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
  */


// import React from "react"
// import ReactDOM from "react-dom"

// const page = (
// <div>
//     <img className="logo" src="./img/react-logo.png" width="40px" alt="image"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousand of enterprise apps, including mobile apps</li>
//     </ul>
// </div>
// )
// ReactDOM.render(page, document.querySelector("#root"))



// 
// 2)
// 1. Why do we need to `import React from "react"` in our files?
// because jsx syntax is in React. React defines jsx

// 2. If I were to console.log(page) in index.js, what would show up?
// page is a js object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// returns multiple elements


// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.



// 
// 3)
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function Page(){
//   return(
//     <div>
//       <img className="logo" src="./img/react-logo.png" width="40px" alt="image"/>
//       <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on Github</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousand of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   )
// }

// ReactDOM.render(<Page />, document.querySelector("#root"))



// 
// 4)
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
// function Page(){
//   return(
//     <div>
//       <header>
//         <nav>
//           <img className="logo" src="./img/react-logo.png" width="40px" alt="image"/>
//         </nav>
//       </header>
      
//       <h1>Reasons I'm excited to learn React</h1>
//       <ul>
//           <li>Reason</li>
//           <li>Reason</li>
//           <li>Reason</li>
//           <li>Reason</li>
//       </ul>
//       <footer>
//         © 2021 Anon development. All rights reserved.
//       </footer>
//     </div>
//   )
// }

// ReactDOM.render(<Page />, document.querySelector("#root"))




// 
// 5)
// Quiz!

// 1. What is a React component?
// A function that returns React elements (or UI)

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
// myComponent is in camel case. Should've been Pascal case


// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root))
// ```
//parentheis in render statement. Angle brackets should be used


// 
// 6)
/**
Mini Challenge:
- Move the `header` element from Page into 
  its own component called "Header"
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
function Header(){
  return(
    <header>
      <nav>
        <img className="logo" src="./img/react-logo.png" width="40px" alt="image"/>
      </nav>
    </header>
  )
}
function MainContent(){
  return(
    <div>
    <h1>Reasons I'm excited to learn React</h1>
    <ul>
        <li>Reason</li>
        <li>Reason</li>
        <li>Reason</li>
        <li>Reason</li>
    </ul>
    </div>
  )
}
function Footer(){
  return(
    <footer>
      <small>© 2021 Anon development. All rights reserved.</small>
    </footer>
  )
}
function Page(){
  return(
    <div>
      <Header/>
      <MainContent/>
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.querySelector("#root"))
