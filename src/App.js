import React from "react";
import ImageList from "./Components/ImageList";
import "./styles.css";
import SingleImage from "./Components/SingleImage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NoMatch from "./Components/NoMatch"
import { DarkmodeProvider } from "./Context/DarkmodeContext"
import { DataProvider } from "./Context/DataContext"

export default function App() {
  return (
    <Router>
      <DarkmodeProvider>
      <DataProvider>
    <div className="App" id="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={ImageList} />
        <Route exact path="/work/:id" component={SingleImage} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </div>
    </DataProvider>
    </DarkmodeProvider>
    </Router>
  );
}
