import TextSection from "../components/textSection"
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import AppBtn from "../components/button";

const BlogPage = () => {
    return (
        <div id="blog">
            <div className="flex justify-center w-full">
                <div className="w-full max-w-6xl grid grid-rows-1 mt-7 mx-auto md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex flex-col items-center justify-center gap-8 md:pr-20 md:pl-10 ">
                        <TextSection title="We Offer a Full Range of Digital Marketing Services!" description="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." boldDescription="        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." />
                    </div>
                    <div className="flex justify-center">
                        <img src={blog1} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="w-full max-w-6xl grid grid-rows-1 mt-7 mx-auto md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex justify-center">
                        <img src={blog2} alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8 sm:mt-12">
                        <TextSection title="Leading Digital Agency for Business Solution." description="Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances." boldDescription="Its smart features make it a powerful stand-alone website building tool." />
                        <div className="ml-9">
                            <AppBtn btnText="Read More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogPage;