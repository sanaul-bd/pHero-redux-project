import React from 'react';
import Home from '../home/Home';
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter, Routes, } from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;