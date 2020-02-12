import React from "react";
import Product from "./Product.jsx";
import { Route, Link, Switch } from "react-router-dom";

function Products({ match }) {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:productId`}component={Product}></Route>
        <Route exact path="/products">
          <span>Select a product please</span>
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
