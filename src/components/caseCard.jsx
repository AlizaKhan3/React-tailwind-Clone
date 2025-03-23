import AppBtn from "./button";

const CaseCard = ({ image, title, description, bgColor }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center h-64 w-full overflow-hidden group" style={{backgroundColor: bgColor}}>
                <img src={image} alt="case study" className="object-cover" />
                {/* Overlay div*/}
                <div className="absolute inset-0 bg-[#0033CCCC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center gap-4 items-center">
                    <h3 className="text-white text-[17px] text-center px-3">Know more about {title}</h3>
                    {/* <button className="mt-3 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 ">Read More</button> */}
                <AppBtn btnText="Read more"/>
                </div>
            </div>
            <h2 className="mt-3 text-base font-medium">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    )
}
export default CaseCard;