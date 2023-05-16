'use client'

import "./styles.css";
import SocialMediaButtons from '../SocialMediaButtons';

const Footer = () => {
    return (
        <>
            <footer
                aria-label="Site Footer"
                className="bg-gray-100 dark:bg-black border-t-2 border-t-gray-300"
            >
                <div className="flex justify-center mx-auto max-w-screen-xl px-2 py-2 ">
                    <div className="py-2 lg:flex lg:items-center lg:justify-center">
                        <div>
                            <SocialMediaButtons />
                            <p className="max-w-md text-center leading-relaxed text-gray-500 text-xs md:text-sm">
                                <strong></strong>
                                <span className="text-xxs md:text-xs">diseñado por</span>{" "}
                                <a href="https://github.com/unaisdev">Unai Canales</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
