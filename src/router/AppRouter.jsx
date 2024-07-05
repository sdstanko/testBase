import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import UsersForTests from '../components/UsersForTests/UserForTests.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import HelloWorld from '../pages/HelloWorld.jsx';
import MainPage from '../pages/MainPage.jsx';
import UserDetailsPage from '../pages/UserDetailsPage.jsx';
import Users from '../users/Users.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hello" element={<HelloWorld/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/users-test" element={<UsersForTests/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
    );
};

export default AppRouter;
