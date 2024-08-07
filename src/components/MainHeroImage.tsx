import React from 'react';
import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-auto w-full object-contain lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
