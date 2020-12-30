import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import { loadUser } from "./actions/auth";

//import pages
import Home from "./pages/Home";
import Error from "./pages/Error";

//import components
import Navbar from "./components/home/Navbar";
import Submenu from "./components/home/Submenu";
import Sidebar from "./components/home/Sidebar";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Submenu />
        <Sidebar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
