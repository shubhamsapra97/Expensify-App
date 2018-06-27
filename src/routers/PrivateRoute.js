import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,    // component passed in Private Router in AppRouter File and component renamed to 'Component'.
    ...rest      // all the remaining props passed to Private Router like exact={true}.
}) => (

    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />

);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);