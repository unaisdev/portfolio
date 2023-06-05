import { Disclosure, Transition } from "@headlessui/react";
import DarkModeToggle from "../../general/DarkModeToggle";
import SocialMediaButtons from "../../general/SocialMediaButtons";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeaderProps {
    open: boolean;
    handleClose: () => void;
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

const MobileNav = ({ open, handleClose, scrollTo }: HeaderProps) => {
    const handleInicioClick = () => { scrollTo.handleScrollToInicio(); handleClose() }
    const handleExperienciaClick = () => { scrollTo.handleScrollToExperience(); handleClose() }
    const handleProjectosClick = () => { scrollTo.handleScrollToProjects(); handleClose() }
    const handleTecnologiasClick = () => { scrollTo.handleScrollToTechnologies(); handleClose() }

    console.log(open)
    return (
        <>
            <Transition show={open}>
                {/* Sliding sidebar */}
                <Transition.Child
                    className="fixed flex right-0 top-0 w-[180px] z-30 h-screen"
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-500 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div
                        id="sidebar"
                        className={`fixed flex justify-between bg-opacity-100 right-0 top-0 w-[180px] h-screen bg-white dark:bg-gray-900 pt-12 p-8 z-50 py-24 transition duration-500`}
                    >
                        <div className="flex flex-col flex-grow justify-between">


                            <div className="flex justify-end items-center mb-5">
                                <DarkModeToggle />
                            </div>

                            <ul className="flex flex-col space-y-3 mb-6">
                                <motion.li
                                    variants={variants}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <p
                                        onClick={handleInicioClick}
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
                                        onClick={handleExperienciaClick}
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
                                        onClick={handleProjectosClick}
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
                                        onClick={handleTecnologiasClick}
                                        className="cursor-pointer dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                                    >
                                        Tecnologías
                                    </p>
                                </motion.li>
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
                        onClick={handleClose}
                        className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
                    ></div>
                </Transition.Child>
            </Transition>
        </>
    );
};

export default MobileNav;
