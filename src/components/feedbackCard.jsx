import { useState } from "react";
import AppPagination from "./pagination";

const FeedbackCards = () => {
    const cardsArr = [
        { id: 1, image: "https://themewagon.github.io/simple/images/face2.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Candice King", designation: "HR Executive" },
        { id: 2, image: "https://themewagon.github.io/simple/images/face20.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Sophia ArmStong", designation: "Software Engineer" },
        { id: 3, image: "https://themewagon.github.io/simple/images/face3.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Elena Gilbert", designation: "Marketing Manager" },
        { id: 4, image: "https://themewagon.github.io/simple/images/face1.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Stephan Salvatore", designation: "Social Media Manager" },
        { id: 5, image: "https://themewagon.github.io/simple/images/face15.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Lan Somerholder", designation: "Graphic Designer" },
        { id: 6, image: "https://themewagon.github.io/simple/images/face16.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Candice King", designation: "HR Executive" },
        { id: 7, image: "https://themewagon.github.io/simple/images/face1.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Sophia ArmStong", designation: "Software Engineer" },
        { id: 8, image: "https://themewagon.github.io/simple/images/face15.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Elena Gilbert", designation: "Marketing Manager" },
        { id: 9, image: "https://themewagon.github.io/simple/images/face3.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Stephan Salvatore", designation: "Social Media Manager" },
        { id: 10, image: "https://themewagon.github.io/simple/images/face2.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Lan Somerholder", designation: "Graphic Designer" },
        { id: 11, image: "https://themewagon.github.io/simple/images/face20.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Sophia ArmStong", designation: "Software Engineer" },
        { id: 12, image: "https://themewagon.github.io/simple/images/face16.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Elena Gilbert", designation: "Marketing Manager" },
        { id: 13, image: "https://themewagon.github.io/simple/images/face1.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Stephan Salvatore", designation: "Social Media Manager" },
        { id: 14, image: "https://themewagon.github.io/simple/images/face3.jpg", feedback: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.", username: "Lan Somerholder", designation: "Graphic Designer" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const cardPerPage = 3;

    const lastCardIndex = currentPage * cardPerPage;
    const firstCardIndex = lastCardIndex - cardPerPage;
    const currentCard = cardsArr.slice(firstCardIndex, lastCardIndex);

    return (
        <>
            <div className="grid grid-rows-1 mt-12 mx-auto gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 md:px-32 custom-screen:px-16">
                {currentCard.map((item) => (
                    <div key={item.id} className="hover:bg-[#ddd] shadow-md py-7 flex gap-3 justify-center items-center flex-col">
                        <img src={item.image} alt="" className="rounded-full" />
                        <p className="text-center text-p-color">{item.feedback}</p>
                        <h2 className="font-semibold">{item.username}</h2>
                        <h4 className="font-medium text-p-color">{item.designation}</h4>
                    </div>
                ))}
            </div>
            <div className="w-full flex items-center justify-center mb-5">
                <AppPagination totalCards={cardsArr.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </>
    );
};

export default FeedbackCards;
