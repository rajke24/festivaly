import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
//import pages
import Home from "./pages/Home"  

//import components
import Navbar from "./components/Navbar"
import Submenu from "./components/Submenu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
