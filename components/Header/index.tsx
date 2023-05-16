'use client'

import { useEffect, useState } from "react";
import './styles.css';
import Image from "next/image";
import { useTheme } from "next-themes";
import DarkModeToggle from "../DarkModeToggle";
import MobileNav from "./MobileNav";

type Props = {
    scrollTo: {
        handleScrollToInicio: () => void,
        handleScrollToExperience: () => void,
        handleScrollToProjects: () => void,
        handleScrollToTechnologies: () => void,
    };
}

const Header = ({ scrollTo }: Props) => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const opacity = position > 0 ? 0.95 : 1; /* Ajusta el nivel de opacidad que deseas para el fondo al hacer scroll */
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="flex justify-between items-center py-4 px-10 bg-white dark:bg-black border-b-2 border-b-gray-300" style={{ opacity: headerOpacity }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:fill-white" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" /></svg>
            </div>
            <nav className="hidden sm:flex">
                <ul className="flex gap-10 ">
                    <li>
                        <a
                            onClick={scrollTo.handleScrollToInicio}
                            className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            href=""
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={scrollTo.handleScrollToExperience}
                            className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            href=""
                        >
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={scrollTo.handleScrollToProjects}
                            className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            href=""
                        >
                            Projectos
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={scrollTo.handleScrollToTechnologies}
                            className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                            href=""
                        >
                            Tecnologías
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="hidden sm:flex">
                <DarkModeToggle />
            </div>
            <div className="flex justify-center items-center sm:hidden">
                <button
                    onClick={() => setOpen(true)}
                    aria-expanded={open}
                    aria-controls="sidebar"
                    aria-label="Open Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:fill-white" viewBox="0 0 24 24"><path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" /></svg>
                </button>
                <MobileNav scrollTo={scrollTo} open={open} setOpen={setOpen} />

            </div>

        </header>
    )
}

export default Header;