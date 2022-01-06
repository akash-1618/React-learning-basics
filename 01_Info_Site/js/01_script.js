// 1)
// ReactDOM.render(<h5>Hello World!</h5>, document.querySelector("#root"))


// 
// 2)
// /* Surprise! You probably thought you could just forget
// the line of code you just learned! Nope, not on my watch!

// Try to write that 1-liner of React code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>s inside*/

// ReactDOM.render(
// <ul><li>Jasmine</li><li>Rose</li></ul>, 
// document.querySelector("#root"))


// 3)
function MainContent() { //func name are always in caps
    return (
        <h1>This is the way!!</h1>
    )
}
ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)