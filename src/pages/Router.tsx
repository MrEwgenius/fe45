import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import RegistrationConfirmation from './RegistrationConfirmation';
import Header from 'src/components/Header';
import SignIn from './SignIn';

export enum RoutesList {
    Home = '/',
    SignUp = '/signUp',
    SignIn = '/signIn',
    RegistrationConfirmation = '/signUp/confirm',
    Default = '*',


}


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path={RoutesList.Home} element={<Header />} >
                        <Route path={RoutesList.Home} element={<Home />} />
                        <Route path={RoutesList.SignUp} element={<SignUp />} />
                        <Route path={RoutesList.SignIn} element={<SignIn />} />
                        <Route path={RoutesList.RegistrationConfirmation} element={<RegistrationConfirmation />} />
                        <Route
                            path={RoutesList.Default}
                            element={<Navigate to={RoutesList.Home} />}
                        />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;