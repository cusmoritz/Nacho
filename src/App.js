import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import OnePost from "./components/OnePost";
import CreatePost from "./components/CreatePost";

const App = () => {

    return (
        <div>
        <h1>Nacho Pro</h1>
        <NavBar />
            <Routes>
                <Route path="/" element={<AllPosts />} />
                <Route path="/posts/:postId" element={<OnePost />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        <Footer />
        </div>
    )
}

export default App;