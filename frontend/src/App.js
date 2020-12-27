import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Home from "./pages/Home"  

//import components
import Navbar from "./components/Navbar"
import Submenu from "./components/Submenu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Submenu />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
