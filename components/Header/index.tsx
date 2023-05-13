'use client'

import { useEffect, useState } from "react";
import './styles.css';
import Image from "next/image";
import { useTheme } from "next-themes";
import DarkModeToggle from "../DarkModeToggle";
import MobileNav from "../MobileNav";

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const opacity = position > 0 ? 0.7 : 1; /* Ajusta el nivel de opacidad que deseas para el fondo al hacer scroll */
            setHeaderOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="flex justify-between items-center py-4 px-10 bg-white dark:bg-black" style={{ opacity: headerOpacity }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" /></svg>
            </div>
            <nav className="hidden md:flex">
                <ul className="flex gap-10">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Tecnologías</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <div className="hidden md:flex">
                <DarkModeToggle />
            </div>
            <div className="flex justify-center items-center md:hidden">
                <button
                    onClick={() => setOpen(true)}
                    aria-expanded={open}
                    aria-controls="sidebar"
                    aria-label="Open Menu"
                >
                    <Image
                        width={28}
                        height={32}
                        className="block lg:hidden"
                        src="icons/icon-menu.svg"
                        alt="Menu"
                    />
                </button>
                <MobileNav open={open} setOpen={setOpen} />
                <nav>
                    <ul className="hidden divide-x lg:flex  lg:ml-14">
                        <li onClick={() => { }} className="cursor-pointer hover:text-almost-black px-6">
                            NUESTRA CARTA
                        </li>

                        <li onClick={() => { }} className="cursor-pointer hover:text-almost-black px-6">
                            DÓNDE ESTAMOS
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;