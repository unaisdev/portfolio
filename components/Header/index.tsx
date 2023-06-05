'use client'

import { useEffect, useState } from "react";
import './styles.css';
import DarkModeToggle from "../general/DarkModeToggle";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"
import { debounce } from "@/helpers";

type Props = {
    scrollTo: {
        handleScrollToInicio: () => void,
        handleScrollToExperience: () => void,
        handleScrollToProjects: () => void,
        handleScrollToTechnologies: () => void,
    };
}

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -300 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const Header = ({ scrollTo }: Props) => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [open, setOpen] = useState(false)

    const handleOpenClick = () => {
        setOpen(true)
    }

    const handleCloseClick = () => {
        setOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const opacity = position > 0 ? 0.75 : 1; /* Ajusta el nivel de opacidad que deseas para el fondo al hacer scroll */
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="left-auto right-auto flex items-center justify-center" >
            <div className="fixed top-0 md:top-4 flex justify-between items-center md:rounded-xl w-full md:w-3/6 px-8 py-2.5 shadow-md shadow-gray-700 bg-white dark:bg-black md:border border-b-gray-300 transition duration-500 ">
                <div onClick={scrollTo.handleScrollToInicio}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:fill-white" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" /></svg> */}
                    <p className="first-letter:text-3xl text-xl font-bold">U<span className="font-semibold">nai</span><span className="text-xs font-thin">(is)</span>.dev</p>
                </div>
                <nav className="hidden sm:flex">
                    <ul className="flex gap-10 ">
                        <motion.li
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={scrollTo.handleScrollToInicio}
                                className="cursor-pointer dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            >
                                Inicio
                            </p>
                        </motion.li>
                        <motion.li
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={scrollTo.handleScrollToExperience}
                                className="cursor-pointer dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            >
                                Experiencia
                            </p>
                        </motion.li>
                        <motion.li
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={scrollTo.handleScrollToProjects}
                                className="cursor-pointer dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            >
                                Projectos
                            </p>
                        </motion.li>
                        <motion.li
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={scrollTo.handleScrollToTechnologies}
                                className="cursor-pointer dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            >
                                Tecnologías
                            </p>
                        </motion.li>
                    </ul>
                </nav>
                <div className="hidden sm:flex">
                    <DarkModeToggle />
                </div>
                <div className="flex justify-center items-center sm:hidden">
                    <button
                        onClick={debounce(() => {
                            console.log("click");

                            setOpen(true)
                        }, 150)}
                        aria-expanded={open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:fill-white" viewBox="0 0 24 24"><path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" /></svg>
                    </button>
                </div>
            </div>
            <MobileNav scrollTo={scrollTo} open={open} handleClose={handleCloseClick} />
        </header>
    )
}

export default Header;