import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialMediaButtons from '../SocialMediaButtons';
import './styles.css'; // Importa tus estilos personalizados

const Presentation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section>
            <div id="presentation" className="relative flex bg-fixed bg-clip-border bg-no-repeat bg-cover flex-col-reverse md:flex-row justify-center items-center">
                {/* Capa de color y opacidad para la imagen del fondo */}
                <div className='absolute inset-0 w-full h-full bg-red-950 bg-opacity-95'></div>
                <div
                    id="left"
                    className={`flex flex-col justify-center items-end transform ${isLoaded ? 'translate-x-0 transition-transform duration-1000' : 'invisible -translate-x-full'
                        }`}
                >
                    <div className="flex items-end">
                        <p className="comment font-semibold md:text-sm">{`// Aquí describo quién soy`}</p>
                    </div>
                    <div>
                        <h1 className="text-md md:text-3xl font-semibold text-right">Unai Canales Sirvent</h1>
                        <h2 className="text-sm md:text-xl text-right">Fullstack Developer</h2>
                    </div>

                    <div>
                        <SocialMediaButtons />
                    </div>
                </div>

                <div
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
                </div>
            </div>
        </section>
    );
};

export default Presentation;
