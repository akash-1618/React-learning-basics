// 1)
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

import Header from "../components/06_Header"


  // function Header() {
  //   return (
  //       <header>
  //           <nav className="nav">
  //               <img src="./img/react-logo.png" className="nav-logo" alt="React Logo" />
  //               <ul className="nav-items">
  //                   <li>Pricing</li>
  //                   <li>About</li>
  //                   <li>Contact</li>
  //               </ul>
  //           </nav>
  //       </header>
  //   )
  // }

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
  