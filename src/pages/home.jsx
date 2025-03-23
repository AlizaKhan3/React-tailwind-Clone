import AppNavbar from "../components/navbar.jsx"
import "../App.css"
import homeImage from "../assets/homeImage.svg"
import AboutPage from "./about.jsx"
import BlogPage from "./blog.jsx"
import AppCaseStudies from "./caseStudies.jsx"
import TestimonialPage from "./testimonial.jsx"
import AppContact from "./contact.jsx"
import AppFooter from "../components/footer.jsx"
import AnchorTemporaryDrawer from "../components/drawer.jsx"
const HomePage = () => {
  return (
    <>
      <AppNavbar />
      <div id="home" className="flex flex-col justify-center items-center">
        <h1 className="md:w-1/2 px-8 py-5 text-center text-4xl font-bold">  Search engine optimisation &
          Marketing.</h1>
        <p className="px-8 text-p-color text-lg text-center">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</p>
        <div className="mt-4">
          {/* <AppBtn btnText={"Aliza"}/> */}
          <button className="bg-[#fec4af] text-primary-color mr-4 py-2.5 px-5 focus:bg-white border-2 focus:border-primary-color"> Get Started </button>
          <button className="bg-[#b7eddd] text-secondary-color ml-4 py-2.5 px-5 focus:bg-white border-2 focus:border-secondary-color" > Learn More </button>
        </div>
        <img src={homeImage} />
      </div>
      <AboutPage/>
      <BlogPage/>
      <AppCaseStudies/>
      <TestimonialPage/>
      <AppContact/>
      <AppFooter/>
      <AnchorTemporaryDrawer/>

    </>
  )
}

export default HomePage;
