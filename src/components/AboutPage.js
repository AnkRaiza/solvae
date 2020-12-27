import React from 'react';
import CustomScroll from 'react-custom-scroll';
import imgWho from '../assets/images/IMG_WHO.png';
import arrow from '../assets/images/ICON_ARROW.png';
import line from '../assets/images/LINE.png';
import '../styles/about-page.scss';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="main_container">
      <div className="row title_container">
        <h2 className="col offset-2">Sobre<br />Nosotros</h2>
        <p className="col-10 offset-2">
          <strong>Párrafo descriptivo de la sección.</strong>Consectetur adipiscing elit. Curabitur tristique sollicitudin nisl, sollicitudin porta tortor hendrerit ut.
        </p>
      </div>
      <div className="row">
        <img className="col image" src={imgWho} alt="imagen corporativa" />
      </div>
      <div className="row midleTextContainer">
        <p className="col-8 offset-2 text-center">
          Somos una empresa dedicada y especializada a la comercialización de ascensores, escaleras mecánicas, salvaescaleras, duplicadores y sistemas de parqueo. Disponemos de un equipo humano con una amplia experiencia, formación y conocimientos para brindarle los mejores servicios de instalación, modernización y mantenimiento de sus elevadores. Hemos seleccionado a los mejores fabricantes de Europa y Asia, quienes desarrollan productos de una alta calidad, grandes prestaciones y una estética que se integra perfectamente para los clientes más exigentes.
        </p>
        <p className="col-8 offset-2 text-center">
          Nuestra cartera con más 100 prestigiosas y reconocidas empresas permite que usted encuentre en nosotros y nuestros productos la confianza para su inversión. Ofrecemos una atención personalizada, en la que sugerimos cual es la mejor opción en lo económico, estético y práctico.
        </p>
      </div>
      <div className="row mision_vision">
        <div className="col-4 offset-2">
          <div className="item">
            <img src={arrow} alt="flecha" />
            <span>Misión</span>
            <span>Proveer soluciones de transporte vertical, basándonos en la calidad, la moderna ingeniería y el respaldo de nuestras representadas europeas y asiáticas.</span>
          </div>
        </div>
        <div className="col-4">
          <div className="item">
            <img src={arrow} alt="flecha" />
            <span>Visión</span>
            <span>Ser un referente nacional para la implementación de productos en la supresión de barreras arquitectónicas y accesibilidad. Ofreciendo servicios profesionales y de calidad, que aporte seguridad, comodidad y fiabilidad.</span>
          </div>
        </div>
      </div>
      <div className="row text-center timeline_container">
        {/* <div className="col-8 offset-2 elevetor_container">
          <div className="year"></div>
          <img src={line} alt="linea de tiempo" />
        </div> */}
        <CustomScroll allowOuterScroll={true}>
          <div className="col-8 offset-2 elevetor_container inner">
            <div className="year">2000</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line left">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2000</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line right">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="middle_line right">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2007</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line left">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2010</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line right">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2016</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line left">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2019</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line right">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
            <div className="year">2020</div>
            <img src={line} alt="linea de tiempo" />
            <div className="middle_line left">
              <div className="title">
                Título del acontecimiento
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mes del acontecimiento
              </div>
            </div>
          </div>
        </CustomScroll>
      </div>
    </div>
  );
};

export default AboutPage;
