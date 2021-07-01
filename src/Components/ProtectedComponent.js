import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const ProtectedComponent = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      localStorage.getItem("isAuthenticated") ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

ProtectedComponent.defaultProps = {
  isAuthenticated: false,
};

export default ProtectedComponent;
