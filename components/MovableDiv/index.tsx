import React, { useEffect, useState } from 'react';
import './styles.css'; // Importa el archivo de estilos CSS

const MovableDiv: React.FC = () => {
  const [isPositioned, setIsPositioned] = useState(false);

  useEffect(() => {
    const targetSection = document.getElementById('targetSection');
    const handleScroll = () => {
      const targetPosition = targetSection?.offsetTop || 0;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setIsPositioned(scrollPosition >= targetPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={`movable-div ${isPositioned ? 'positioned' : ''}`}>¡Soy un div que se mueve libremente!</div>;
};

export default MovableDiv;
