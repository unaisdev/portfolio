import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialMediaButtons from '../general/SocialMediaButtons';
import './styles.css'; // Importa tus estilos personalizados
import InfoPresentation from './InfoPresentation';
import MovableDiv from '../MovableDiv';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
};

const Presentation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className='relative w-full'>
            <div id="presentation" className="-z-20 relative h-96 max-h-96  flex bg-clip-border bg-no-repeat bg-fixed bg-center bg-cover flex-col-reverse md:flex-row justify-center items-center py-8">
                {/* Capa de color y opacidad para la imagen del fondo */}
                <div className='absolute inset-0 w-full h-full bg-slate-100 dark:bg-black bg-opacity-90 dark:bg-opacity-80 transition duration-500'></div>
                <div
                    id="left"
                    className={`flex flex-col justify-center items-end mx-12 transform ${isLoaded ? '-translate-y-0 transition-transform duration-1000' : 'invisible translate-y-full'
                        }`}
                >
                    <div className="flex items-end">
                        <p className="comment font-extrabold text-xs md:text-sm">{`// Una breve presentacion`}</p>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold text-right">Unai Canales Sirvent</h1>
                        <h2 className="text-xl md:text-xl font-medium text-right">Fullstack Developer</h2>
                    </div>
                    {/* <MovableDiv /> */}

                    <div>
                        <SocialMediaButtons />
                    </div>
                </div>
            </div>
            {/* <InfoPresentation /> */}
        </section>
    );
};

export default Presentation;
