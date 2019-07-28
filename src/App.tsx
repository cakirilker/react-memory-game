import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Result from "./containers/result";
import TilesBoard from "./containers/tiles-board";
export const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <div className="app-content container">
        <Route path="/" exact component={Home} />
        <Route path="/playground" exact component={TilesBoard} />
        <Route path="/result" exact component={Result} />
      </div>
    </div>
  </BrowserRouter>
);
export default App;
