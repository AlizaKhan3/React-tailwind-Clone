// import { MdOutlineMenu } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import AppBtn from "./button";
// const NavLinks = () => {
//     return (
//         <div className="flex w-full md:space-x-44">
//             <div className="flex space-x-4 justify-center items-center">
//                 <Link smooth={true} to="#home" className="font-medium hover:text-primary-color active:text-primary-color" >Home </Link>
//                 <Link smooth to="#about" className="font-medium hover:text-primary-color active:text-primary-color"> About </Link>
//                 <Link smooth to="#blog" className="font-medium hover:text-primary-color active:text-primary-color"> Blog </Link>
//                 <Link smooth to="#testimonial" className="font-medium hover:text-primary-color active:text-primary-color"> Testimonials </Link>

//             </div>
//             <div>
//                 <AppBtn btnText="Contact" />

//             </div>
//         </div>
//     )
// }

// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     }
//     return (
//         <>
//             <div className="md:w-1/3 flex justify-start">
//                 <div className="hidden md:flex justify-start custom-screen:gap-4">
//                     <NavLinks />
//                 </div>
//                 <div className="md:hidden">
//                     <button onClick={toggleNavbar}> {isOpen ? <RxCross2 /> : <MdOutlineMenu />}</button>
//                 </div>
//             </div>
//             {
//                 isOpen && (
//                     <div className="flex flex-col items-center basis-full bg-white p-4">
//                         <NavLinks />
//                     </div>
//                 )
//             }
//         </>
//     )
// }
// export default Nav;


import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import AppBtn from "./button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

const NavLinks = () => {
    return (
        <div className="nav-spacing md:flex w-full space-x-44">
            <div className="drawer-links md:flex space-x-4 justify-center items-center">
                <Link smooth={true} to="#home" className="font-medium hover:text-primary-color active:text-primary-color" >Home </Link>
                <Link smooth to="#about" className="font-medium hover:text-primary-color active:text-primary-color"> About </Link>
                <Link smooth to="#blog" className="font-medium hover:text-primary-color active:text-primary-color"> Blog </Link>
                <Link smooth to="#testimonial" className="font-medium hover:text-primary-color active:text-primary-color"> Testimonials </Link>
            </div>
            <div className="drawer-btn">
                <AppBtn btnText="Contact" />
            </div>
        </div>
    );
};

const Nav = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className="p-4 flex flex-col items-start"
    >
        <NavLinks />
    </Box>
        // <Box
        //     sx={{ width: 250 }}
        //     role="presentation"
        //     onClick={toggleDrawer(false)}
        //     onKeyDown={toggleDrawer(false)}
        // >
        //     <List>
        //         {[<NavLinks/>].map((text) => (
        //             <ListItem key={text} disablePadding>
        //                 <ListItemButton>
        //                     <ListItemText primary={text} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        // </Box>
    );

    return (
        <>
            <div className="md:w-1/3 flex justify-start">
                <div className="hidden md:flex justify-start custom-screen:gap-4">
                    <NavLinks />
                </div>
                <div className="md:hidden ">
                    <button onClick={toggleDrawer(true)}>
                        <MdOutlineMenu size={24} />
                    </button>
                </div>
            </div>

            {/* MUI Drawer for Small Screens */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </>
    );
};

export default Nav;
