import React from 'react';
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Acerca de la APP</h1>
      <p className={style.sobre_mi}>Hola, mi nombre es Juan Martín Arrayago y soy un desarrollador web full stack con experiencia en React y Redux.</p>
      <p className={style.sobre_app}>Esta aplicación fue creada con el propósito de demostrar mis habilidades en desarrollo web y brindar una experiencia útil para los usuarios, es sobre la serie de televisión "Rick and Morty" y fue creada con el propósito de brindar información y entretenimiento a los fans de la serie..</p>
    </div>
  );
};

export default About;