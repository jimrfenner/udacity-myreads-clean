import React, { Component } from "react";
import { Route } from "react-router-dom";
//import * as BooksAPI from '../BooksAPI';
import Search from "./Search";
import BookShelves from "./BookShelves";
import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelves />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
