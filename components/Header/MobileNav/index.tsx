import { Disclosure, Transition } from "@headlessui/react";
import DarkModeToggle from "../../DarkModeToggle";
import SocialMediaButtons from "../../SocialMediaButtons";
import Image from "next/image";

interface HeaderProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scrollTo: {
        handleScrollToInicio: () => void,
        handleScrollToExperience: () => void,
        handleScrollToProjects: () => void,
        handleScrollToTechnologies: () => void,
    };

}

const MobileNav = ({ open = false, setOpen, scrollTo }: HeaderProps) => {

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
                                <li>
                                    <a
                                        onClick={() => { scrollTo.handleScrollToInicio(); setOpen(false) }}
                                        className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                                    >
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { scrollTo.handleScrollToExperience(); setOpen(false) }}
                                        className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                                    >
                                        Experiencia
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { scrollTo.handleScrollToProjects(); setOpen(false) }}
                                        className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                                    >
                                        Projectos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => { scrollTo.handleScrollToTechnologies(); setOpen(false) }}
                                        className="dark:text-white hover:[text-shadow:_1px_3px_8px_rgb(88_88_88_/_80%)] hover:dark:[text-shadow:_1px_3px_8px_rgb(255_255_255_/_100%)]"
                                    >
                                        Tecnologías
                                    </a>
                                </li>
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
