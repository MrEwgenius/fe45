import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import RegistrationConfirmation from './RegistrationConfirmation';
import Header from 'src/components/Header';
import SignIn from './SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelectors, getUserInfo } from 'src/redux/reducers/authSlice';
import Success from './Success/Success';
import SelectedPost from './SelectedPost';
import Search from './Search';

export enum RoutesList {
    Home = '/',
    SignUp = '/signUp',
    SignIn = '/signIn',
    RegistrationConfirmation = '/activate/:uid/:token',
    Success = '/signUp/confirm/success',
    SelectedPost = '/post/:id',
    Search = '/posts/:search',
    Default = '*',


}




const Router = () => {
    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn)
    const userInfo = useSelector(AuthSelectors.getUserInfo)

    const dispatch = useDispatch()

    useEffect(() => {

        if (isLoggedIn) {
            dispatch(getUserInfo())
        }
    }, [isLoggedIn])


    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path={RoutesList.Home} element={<Header />} >
                        <Route path={RoutesList.Home} element={<Home />} />
                        <Route path={RoutesList.SignUp} element={!isLoggedIn || userInfo ? <SignUp /> : <Navigate to={RoutesList.Home} />} />
                        <Route path={RoutesList.SignIn} element={!isLoggedIn || userInfo ? <SignIn /> : <Navigate to={RoutesList.Home} />} />
                        <Route path={RoutesList.Success} element={!isLoggedIn || userInfo ? <Success /> : <Navigate to={RoutesList.Home} />} />
                        <Route path={RoutesList.SelectedPost} element={!isLoggedIn || userInfo ? <SelectedPost /> : <Navigate to={RoutesList.Home} />} />
                        <Route path={RoutesList.RegistrationConfirmation} element={!isLoggedIn || userInfo ? <RegistrationConfirmation /> : <Navigate to={RoutesList.Home} />} />
                        <Route
                            path={RoutesList.Default}
                            element={<Navigate to={RoutesList.Home} />}
                        />
                        <Route path={RoutesList.Search} element={<Search />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;