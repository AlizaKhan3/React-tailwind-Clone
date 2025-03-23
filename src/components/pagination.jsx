import { FaRegCircle } from "react-icons/fa";
import { TbCircleFilled } from "react-icons/tb";


const AppPagination = ({ totalCards, cardPerPage, currentPage, setCurrentPage }) => {
    let cards = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        cards.push(i);
    }
    return (
    <div className="flex gap-2 justify-center mt-4 items-center">
            {
                cards.map((card, index) => {
                    return (
                        
                            currentPage === index + 1 ? 
                            <FaRegCircle
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className="cursor-pointer text-1xl text-primary-color"                          
                        />
                        :
                        <TbCircleFilled  key={index}
                        onClick={() => setCurrentPage(index + 1)} className="cursor-pointer text-1xl text-primary-color hover:text-p-color"/>
                        
                       
                    )
                })
            }
        </div>
    )
}

export default AppPagination;