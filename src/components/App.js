import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./books/Create";
import StreamEdit from "./books/Edit";
import StreamDelete from "./books/Delete";
import StreamList from "./books/List";
import StreamShow from "./books/Show";

import history from "../history";

import Header from "./Header";

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/book/new' exact component={StreamCreate} />
            <Route path='/book/edit/:id' exact component={StreamEdit} />
            <Route path='/book/delete/:id' exact component={StreamDelete} />
            <Route path='/book/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
