import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {MyTrips} from "./pages/ MyTrips";
import {HomePage} from "./pages/HomePage";
import {Travel} from "./pages/Travel";
import {AboutUs} from "./pages/AboutUs";
import {Contacts} from "./pages/Contacts";

export const UseRoutes = () => {
  return (
    <Switch>
      <Route path='/home'>
        <HomePage  />
      </Route>
      <Route path='/trips'>
        <MyTrips  />
      </Route>
      <Route path='/travel/:id'>
        <Travel  />
      </Route>
      <Route path='/about'>
        <AboutUs  />
      </Route>
      <Route path='/contact'>
        <Contacts />
      </Route>
      <Redirect to='/home'/>
    </Switch>
  );
};
