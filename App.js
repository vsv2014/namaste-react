// const heading = React.createElement(
//     "h1" , 
//     {id : "heading", xyz: "abc"} , 
//     "Hello Mama! Namaste");
// console.log(heading);


import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
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

root.render(parent); // You should render 'parent', not 'heading'