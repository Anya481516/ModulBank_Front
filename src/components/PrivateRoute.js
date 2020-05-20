import React from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
    render() {
        const { children, authorized, ...RestProps } = this.props;

        return (
            <Route {...RestProps}>
                {
                    authorized ? children : <Redirect to="/login"/>
                }
            </Route>
        );
    }
};

export { PrivateRoute };