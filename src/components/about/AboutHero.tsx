import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero-about.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Notre Histoire
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Depuis 2015, MEDIMMOSECRET s'engage à offrir des expériences de séjour uniques 
          à Tanger, alliant le charme traditionnel marocain au confort moderne.
        </p>
      </div>
    </div>
  );
}