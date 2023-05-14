import { Disclosure, Transition } from "@headlessui/react";
import DarkModeToggle from "../DarkModeToggle";
import SocialMediaButtons from "../SocialMediaButtons";
import Image from "next/image";

interface HeaderProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ open = false, setOpen }:HeaderProps) => {

    function handleClickCarta() {
        const anchor = document.querySelector("#carta");
        anchor?.scrollIntoView({ behavior: "smooth" });
        setOpen(false)
    }

    function handleClickInfo() {
        const anchor = document.querySelector("#info");
        anchor?.scrollIntoView({ behavior: "smooth" });
        setOpen(false)
    }

    return (
        <>
            <Transition show={open}>
                {/* Sliding sidebar */}
                <Transition.Child
                    className="fixed flex right-0 top-0 w-[250px] z-30 h-screen"
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div
                        id="sidebar"
                        className={`fixed flex justify-between right-0 top-0 w-[250px] h-screen bg-white dark:bg-gray-900 pt-12 p-8 z-50 py-24`}
                    >
                        <div className="flex flex-col flex-grow justify-between">


                            <div className="flex justify-end items-center mb-5">
                                <DarkModeToggle />

                                {/* <button
                                    className="bg-red-800 h-10 w-10 p-2 rounded-xl"
                                    onClick={() => setOpen(false)}
                                    aria-expanded={open}
                                    aria-controls="sidebar"
                                >
                                    <Image
                                        className=""
                                        width={32}
                                        height={32}
                                        src="icons/icon-close-menu.svg"
                                        alt="Close Menu"
                                    />
                                </button> */}
                            </div>

                            <ul className="flex flex-col space-y-3 mb-6">
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Sobre mi</a></li>
                                <li><a href="#">Tecnologías</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                            <div className="">
                                <SocialMediaButtons />
                            </div>
                        </div>


                    </div>
                </Transition.Child>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        onClick={() => setOpen(false)}
                        className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
                    ></div>
                </Transition.Child>
            </Transition>
        </>
    );
};

export default MobileNav;
