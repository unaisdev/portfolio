import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialMediaButtons from '../SocialMediaButtons';
import './styles.css'; // Importa tus estilos personalizados
import InfoPresentation from './InfoPresentation';

const Presentation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className='relative'>
            <div id="presentation" className="relative h-96 max-h-96 flex bg-clip-border bg-no-repeat bg-local bg-center flex-col-reverse md:flex-row justify-center items-center py-8">
                {/* Capa de color y opacidad para la imagen del fondo */}
                <div className='absolute inset-0 w-full h-full bg-slate-100 dark:bg-black bg-opacity-90 dark:bg-opacity-80'></div>
                <div
                    id="left"
                    className={`flex flex-col justify-center items-end mx-12 transform ${isLoaded ? 'translate-x-0 transition-transform duration-1000' : 'invisible -translate-x-full'
                        }`}
                >
                    <div className="flex items-end">
                        <p className="comment font-extrabold text-xs md:text-sm">{`// Una breve presentacion`}</p>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold text-right">Unai Canales Sirvent</h1>
                        <h2 className="text-xl md:text-xl font-medium text-right">Fullstack Developer</h2>
                    </div>

                    <div>
                        <SocialMediaButtons />
                    </div>
                </div>

                {/* <div
                    id="right"
                    className={`z-10 flex flex-col justify-center items-start`}
                >
                    <Image
                        width={550}
                        height={350}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={'/programming.png'}
                        alt="Unai Canales Sirvent, desarrollador de aplicaciones multiplataforma"
                    />
                </div> */}
            </div>
            <InfoPresentation />

        </section>
    );
};

export default Presentation;
