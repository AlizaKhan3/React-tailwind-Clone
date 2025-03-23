const AppCard = ({icon, title}) => {
    return (
        // <div className="grid grid-rows-1 mt-7 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-20">
            <div className="lg:px-16 p-4 md:py-5 shadow-lg ">
                <img src={icon} className="mb-2"/>
                <h1 className="md:w-1/2 mb-3 text-xl font-semibold">{title}</h1>
                <p className="text-p-color mb-3 text-base">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                <button className="hover:text-primary-color">Readmore</button>
            </div>
    )
}

export default AppCard;