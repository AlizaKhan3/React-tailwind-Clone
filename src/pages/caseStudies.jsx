import CaseCard from "../components/caseCard";
import case1 from "../assets/case1.svg"

const AppCaseStudies = () => {
    return (
        <div id='about' className="flex flex-col justify-center items-center my-8 mt-24">
            <h1 id="about" className="md:w-1/2 px-8 py-5 text-center text-4xl font-medium">Our case studies</h1>
            <p className="px-10 text-p-color text-lg text-center md:w-1/2">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
            <div className="grid grid-rows-1 mt-12 mx-auto gap-6 w-full sm:grid-cols-2 lg:grid-cols-4 md:px-32 custom-screen:px-16">
                <CaseCard image={case1} title="Online Marketing" description="Seo, Marketing" bgColor="#000637" />
                <CaseCard image={case1} title="Web Development" description="Developing, Designing" bgColor="#ffad00" />
                <CaseCard image={case1} title="Web Designing" description="Designing, Developing" bgColor="#bbbbf2" />
                <CaseCard image={case1} title="Software Development" description="Developing, Designing" bgColor="#5ed6b3" />
            </div>
        </div>
    )
}

export default AppCaseStudies;