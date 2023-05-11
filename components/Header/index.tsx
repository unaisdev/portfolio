'use client'

import { useEffect, useState } from "react";
import './styles.css';
import Image from "next/image";
import { useTheme } from "next-themes";

function DarkModeToggle({ colour = 'bg-gray-200 dark:bg-gray-300', on = false, onToggle = (isOn: boolean) => { }, tabIndex = 0 }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [isOn, setIsOn] = useState(on);

    function toggle() {
        theme == "dark" ? setTheme('light') : setTheme("dark")
        setIsOn(!isOn);
        onToggle(!isOn);
    }

    function handleClick() {
        toggle();
    }


    return (
        <div
            role="checkbox"
            aria-checked={isOn ? 'true' : 'false'}
            tabIndex={0}
            // onKeyDown={handleKeyDown}
            onClick={handleClick}
            className={`cursor-pointer w-11 h-5 ${colour} rounded-full relative px-1.5 flex items-center${isOn ? '' : ' justify-end'}`}
        >
            <div className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${isOn ? 'translate-x-6' : 'translate-x-0'}`} />
            {isOn ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>

            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
        </div>
    );
}

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);

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
            <nav className="flex">
                <ul className="flex gap-10">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Tecnologías</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <div>
                <DarkModeToggle />
            </div>

        </header>
    )
}

export default Header;