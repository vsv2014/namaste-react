// const heading = React.createElement(
//     "h1" , 
//     {id : "heading", xyz: "abc"} , 
//     "Hello Mama! Namaste");
// console.log(heading);


import React from "react";
import ReactDOM from "react-dom/client";
/* const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is heading 1"),
        React.createElement("h2", {}, "This is heading 2"), // Changed to h2 for variety
    ]),
]); 

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "This is heading 1"),
        React.createElement("h2", {}, "This is heading 2"), // Changed to h2 for variety
    ]);

// Missing closing parenthesis and semicolon for the parent element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // You should render 'parent', not 'heading' */

const heading = React.createElement("h1", {id : "heading"}, "NamasteDevvvv")

//ReactElement

const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namsate from JSX syntax
    </h1>
  );
};

const HeadingComponent = () => (
    <div id="container">
        {Title()}
        {14343 + 3443432}
        <Title />
        {84-22}
        <Title></Title>
    <h1 className="heading"> This is my first react functional compoennt</h1>
    </div>
)

const TitleComponent = () => (
    <div id="container2">
        <h4 className="title"> This is another trial one</h4>
        <HeadingComponent />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render();
root.render(<TitleComponent/>);


// console.log(jsxHeading);