import React from "react";
import InputForm from "./InputForm";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <h1>Nacho Pro</h1>
            <NavBar />
            <InputForm />
            <Footer />
        </div>
    )
}

export default Home;