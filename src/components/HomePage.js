import React from 'react';
import slider1 from '../assets/images/HOME_SLIDER_1.png';
import slider2 from '../assets/images/HOME_SLIDER_2.png';
import slider3 from '../assets/images/HOME_SLIDER_3.png';
import brand1 from '../assets/images/BRAND_1.png';
import brand2 from '../assets/images/BRAND_2.png';
import brand3 from '../assets/images/BRAND_3.png';
import brand4 from '../assets/images/BRAND_4.png';
import arrow from '../assets/images/PROD_BULLET.png';

const HomePage = () => {
	return (
		<div>
			<div id="solvaeMainSlider" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#solvaeMainSlider" data-slide-to="0" className="active"></li>
					<li data-target="#solvaeMainSlider" data-slide-to="1"></li>
					<li data-target="#solvaeMainSlider" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={slider1} alt="First slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider2} alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider3} alt="Third slide" />
					</div>
				</div>
				<div className="home_slider_container col-4 offset-4 text-center">
					<p>Trasladarse dentro y fuera de casa nunca fue tan facil.</p>
					<div className="row justify-content-evenly">
						<button className="btn btn-primary shadow-none col-3 offset-1">Hogar</button>
						<button className="btn btn-primary shadow-none col-3 offset-1">Empresas</button>
						<button className="btn btn-primary shadow-none col-3 offset-1">Servicios</button>
					</div>
				</div>
			</div>
			<div className="middleTextContainer">
				<div className="row">
					<p className="col-4 offset-4 text-center">Contamos con el apoyo de empresas con amplia trayectoria y los mejores productos</p>
				</div>
				<div className="row">
					<p className="col-6 offset-3 text-center">Te brindamos el mejor respaldo y garantía.</p>
				</div>
			</div>
			<div className="simpleProductContainer row col-8 offset-2">
				<div className="col-4">
					<div className="parallax prod1"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Sillas Salvaescaleras</span></div>
				</div>
				<div className="col-4">
					<div className="parallax prod2"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Plataformas Salvaescaleras</span></div>
				</div>
				<div className="col-4">
					<div className="parallax prod3"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Montaescaleras</span></div>
				</div>
				<div className="col-4">
					<div className="parallax prod4"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Elevador para el hogar</span></div>
				</div>
				<div className="col-4">
					<div className="parallax prod5"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Ascensores</span></div>
				</div>
				<div className="col-4">
					<div className="parallax prod6"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Escaleras mecánicas y</span><span className="second_text">Rampas móvles</span></div>
				</div>
				<div className="col-4 offset-4">
					<div className="parallax prod7"></div>
					<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Duplicadores de estacionamiento</span></div>
				</div>
			</div>
			<div id="solvaeProviderSlider" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#solvaeProviderSlider" data-slide-to="0" className="active"></li>
					<li data-target="#solvaeProviderSlider" data-slide-to="1"></li>
					<li data-target="#solvaeProviderSlider" data-slide-to="2"></li>
					<li data-target="#solvaeProviderSlider" data-slide-to="3"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={brand1} alt="First slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={brand2} alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={brand3} alt="Third slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={brand4} alt="Fourth slide" />
					</div>
				</div>
			</div>
			<div className="testimonialsContainer">
				<div>La confianza de nuestros clientes, dice mas de lo que podriamos decirte nosotros</div>
				<div>gil 1</div>
				<div>gil 2</div>
			</div>
		</div>
	);
};

export default HomePage;
