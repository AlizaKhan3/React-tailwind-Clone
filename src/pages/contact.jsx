import bgImg from "../assets/contactBg.jpg";
import AppBtn from "../components/button";

const AppContact = () => {
    return (

        <div className="relative flex justify-center items-center group w-full">
            <img src={bgImg} alt="" className="w-full h-full" ></img>

            <div className="absolute flex flex-col justify-center gap-4 items-center text-center">
                <h1 id="contact" className="text-3xl font-medium">Do you have any projects? <br /> Contact us</h1>

                <div>
                    <button className="border-primary-color px-10 rounded-full text-primary-color py-2.5 px-5 bg-white border-2 hover:bg-primary-color hover:text-white" >Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default AppContact;