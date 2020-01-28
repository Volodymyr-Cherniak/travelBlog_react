import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import 'materialize-css'
import {UseRoutes} from "./routes";
import {NavBar} from "./pages/navBar";


function App() {

  const routes = UseRoutes(true);

  return (
    <Router>
      <div className='container'>
        <NavBar/>
        {routes}
      </div>
    </Router>
    );
}

export default App;
