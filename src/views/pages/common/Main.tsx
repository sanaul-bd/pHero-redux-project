import React from 'react';
// import Home from '../home/Home';
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter, Routes, } from "react-router-dom";

// lazy loader fucntionality : এখানে প্রয়োজনে এই কোড টা শুধু আসবে বাকি কোড গুলো যা স্ট্যাটিক সেগুলো বার বার লোড হবে না । এতে প্রোগ্রাম অপটিমাইজড হবে । p
const Home = React.lazy(()=> import("../home/Home"))

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                {/* <Route path='/product/:id' element={{}} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Main;