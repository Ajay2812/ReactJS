import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Fragment } from "react";

/*
import Header from "./header"
import Footer from "./footer"
import Main from "./MainContent"

const root = createRoot(document.getElementById("root"));
function TempMain() {
  return (
    <main>
      <img src="src/assets/react.svg" width="40px" />
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </main>
  );
}
root.render(
  <TempMain />
);

const root = createRoot(document.getElementById("root"));
function Page() {
  return (
    //<> or <Fragment>
    <div className="conatiner">
      <Header />
      <Main />
      <Footer />
    </div>
    //</>
  );
}

root.render(<Page></Page>);
*/



const root = createRoot(document.getElementById("root"));
root.render(
  <App />
)