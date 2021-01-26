import { useState } from "react";
import "./App.css";
import Backdrop from "./Components/Backdrop";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import SideDrawer from "./Components/SideDrawer";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Components/Services";
import Vision from "./Components/Vision";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app" style={{ height: "100%" }}>
        <Switch>
          <Route path="/contact">
            <Header drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
            {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Header drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />
            {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
            <Banner />
            <Services id="service-part" />
            <Vision id="vision-part" />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
