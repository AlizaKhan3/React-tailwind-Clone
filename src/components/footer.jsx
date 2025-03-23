import logo from "../assets/logo.svg"
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import "../App.css";

const AppFooter = () => {
    return (
        <>
            <div className="grid gap-10 sm:grid-cols-2 my-10 py-20 px-3 md:grid-cols-4 border-b border-[#6e6e6e] ">
                <div className="footer-div flex justify-start gap-4 flex-col">
                    <p className="text-p-color"><img src={logo} alt="" /></p>
                    <p className="text-p-color">mikayla_beer@feil.name</p>
                    <p className="text-p-color">906-179-8390</p>
                </div>
                <div className="footer-div flex justify-start gap-4 flex-col">
                    <h1 className="font-medium">Get in Touch</h1>
                    <p className="text-p-color">Don’t miss any updates of our new templates and extensions!</p>
                    <div className="footer-div flex flex-col gap-4">
                        <input type="email" name="email" id="email" placeholder="Email id" className="email px-2 rounded" />
                        <button className="bg-black text-white py-2.5 px-5 border-2 hover:bg-white hover:border-black hover:text-black sm:w-40">Subscribe</button>
                    </div>
                </div>
                <div className="footer-div flex justify-start gap-4 flex-col">
                    <h1 className="font-medium">Our Guidelines</h1>
                    <p className="text-p-color">Terms</p>
                    <p className="text-p-color">Privacy Policy</p>
                    <p className="text-p-color">Cookie Policy</p>
                    <p className="text-p-color">Discover</p>
                </div>
                <div className="footer-div flex justify-start gap-4 flex-col">
                    <h1 className="font-medium">Our Address</h1>
                    <p className="text-p-color">518 Schmeler Neck</p>
                    <p className="text-p-color">Barlett. Illinos</p>
                    <div className="flex gap-2 justify-start">
                        <p className="text-p-color"><TiSocialFacebook /></p>
                        <p className="text-p-color"><IoLogoTwitter /> </p>
                        <p className="text-p-color"><IoLogoInstagram /></p>
                        <p className="text-p-color"><TiSocialLinkedin /> </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-10">
                <p className="text-p-color">Copyright © 2019 <span className="text-primary-color"> Bootstrapdash. </span> All rights reserved. Distributed by <span className="text-primary-color"> ThemeWagon.</span></p>
            </div>
            </>
    )
}

export default AppFooter;