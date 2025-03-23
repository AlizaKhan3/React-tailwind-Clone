import AppCard from "../components/aboutCard.jsx"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"

const AboutPage = () => {
    return (
        <div id='about' className="flex flex-col justify-center items-center my-8 mt-24">
            <h1 id="about" className="md:w-1/2 px-8 py-5 text-center text-4xl font-medium">How does it works</h1>
            <p className="px-10 text-p-color text-lg text-center md:w-1/2">One theme that serves as an easy-to-use operational toolkit
                that meets customer's needs.</p>
            <div className="grid grid-rows-1 mt-7 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-20">
                <AppCard icon={icon1} title="Speed Optimisation" />
                <AppCard icon={icon2} title="SEO and Backlinks" />
                <AppCard icon={icon3} title="Content Marketing" />
            </div>
        </div>
    )
}

export default AboutPage;