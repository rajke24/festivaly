import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import { loadUser } from "./actions/auth";

//import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import AllFestivals from "./pages/festivals/All";
import SingleFestival from "./pages/festivals/SingleFestival";
import Top10Festivals from "./pages/festivals/Top10";
import FestivalsCalendar from "./pages/festivals/Calendar"

//import components
import Navbar from "./components/home/Navbar";
import Submenu from "./components/home/Submenu";
import Sidebar from "./components/home/Sidebar";
import LoginModal from "./components/accounts/LoginModal";
import RegisterModal from "./components/accounts/RegisterModal";

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
        <LoginModal />
        <RegisterModal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/festivals/all" component={AllFestivals} />
          <Route path="/festivals/top" component={Top10Festivals} />
          <Route path="/festivals/festival/:id" component={SingleFestival} />
          <Route path="/festivals/calendar" component={FestivalsCalendar} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
