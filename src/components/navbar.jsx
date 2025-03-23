import { useState } from "react";
import AppLogo from "./logo.jsx";
import Nav from "./navLinks.jsx";
import AppBtn from "./button.jsx";
import "../App.css"

const AppNavbar = () => {
    return (
        // <div className="sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-gray-500 px-20 py-8">
        <div className="nav h-5 bg-white sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between border-gray-500 md:px-20 py-10 pb-20">
            <div className="w:1/2">
                <AppLogo />
            </div>
            <div>
                <Nav />
            </div>
            {/* <div>
            <AppBtn btnText="Contact Us"/>

            </div> */}
        </div>
    )
}

export default AppNavbar;