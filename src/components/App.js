import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/Create";
import StreamEdit from "./streams/Edit";
import StreamDelete from "./streams/Delete";
import StreamList from "./streams/List";
import StreamShow from "./streams/Show";

import history from "../history";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
