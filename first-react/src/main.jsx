import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


//Declarative way : need to tell what needs to happen
//const root=createRoot(document.getElementById("root"))
//root.render(
 // <h1>Hello world</h1>
//)

//Imperative Way : Need to declare each and every step
const h1=document.createElement("h1")
h1.textContent="This is imperative"
h1.className="header"
document.getElementById("root").appendChild(h1)


