import Image from 'next/image';
import { useState, useEffect } from 'react';
import SocialMediaButtons from '../SocialMediaButtons';
import './styles.css'; // Importa tus estilos personalizados

const AboutMe = () => {
  const [showColumns, setShowColumns] = useState(false);

  useEffect(() => {
    setShowColumns(true);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-2">
        <div className={`flex flex-col justify-center items-end ${showColumns ? 'animate-enter-from-left' : 'invisible'}`}>
          <div className="flex items-end">
            <p className="command text-xs md:text-sm">// Aquí describo quién soy</p>
          </div>
          <div>
            <h1 className="text-xl md:text-3xl text-right">Unai Canales Sirvent</h1>
            <h2 className="text-md md:text-xl text-right">Fullstack Developer</h2>
          </div>
          <div>
            <SocialMediaButtons />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-start ${showColumns ? 'animate-enter-from-right' : 'invisible'}`}>
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

export default AboutMe;
