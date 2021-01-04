import React from 'react';
import slider1 from '../assets/images/HOME_SLIDER_1.png';
import slider2 from '../assets/images/HOME_SLIDER_2.png';
import slider3 from '../assets/images/HOME_SLIDER_3.png';
import brand1 from '../assets/images/BRAND_1.png';
import brand2 from '../assets/images/BRAND_2.png';
import brand3 from '../assets/images/BRAND_3.png';
import brand4 from '../assets/images/BRAND_4.png';
import client1 from '../assets/images/CLIENT_1.png';
import client2 from '../assets/images/CLIENT_2.png';
import client4 from '../assets/images/CLIENT_4.png';
import tes1 from '../assets/images/TES_1.png';
import tes2 from '../assets/images/TES_2.png';
import arrow from '../assets/images/PROD_BULLET.png';
import quote from '../assets/images/QUOTES.png';

const HomePage = () => {
	return (
		<div className="col-12">
			<div id="solvaeMainSlider" className="carousel slide row" data-ride="carousel">
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
				<div className="home_slider_container col-10 col-lg-5 offset-1 text-center">
					<div className="slider_text">
						<p>Trasladarse dentro y fuera de casa, nunca fue tan fácil.</p>
					</div>
				</div>
				<div className="col-12 col-lg-6 offset-lg-3 text-center slider_buttons">
					<button className="btn btn-primary shadow-none">Hogar</button>
					<button className="btn btn-primary shadow-none">Empresas</button>
					<button className="btn btn-primary shadow-none">Servicios</button>
				</div>
			</div>
			<div className="middleTextContainer row">
				<div className="col-12 col-lg-4 offset-lg-4 text-center">
					Contamos con el apoyo de empresas con amplia trayectoria y los mejores productos
				</div>
				<div className="col-10 col-lg-6 offset-1 offset-lg-3 text-center">
					Te brindamos el mejor respaldo y garantía.
				</div>
			</div>
			<div className="simpleProductContainer row">
				<div className="col-12 col-lg-8 offset-lg-2">
					<div className="row">
						<div className="col-12 col-lg-4">
							<div className="parallax prod1"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Sillas Salvaescaleras</span></div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="parallax prod2"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Plataformas Salvaescaleras</span></div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="parallax prod3"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Montaescaleras</span></div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="parallax prod4"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Elevador para el hogar</span></div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="parallax prod5"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Ascensores</span></div>
						</div>
						<div className="col-12 col-lg-4 custom_two_lines">
							<div className="parallax prod6"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Escaleras mecánicas y</span><span className="second_text">Rampas móvles</span></div>
						</div>
						<div className="col-12 col-lg-4 offset-lg-4">
							<div className="parallax prod7"></div>
							<div className="simple_product_base"><img src={arrow} width="25" height="25" /><span>Duplicadores de estacionamiento</span></div>
						</div>
					</div>
				</div>
			</div>
			<div id="solvaeProviderSlider" className="carousel slide row" data-ride="carousel">
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
				<div className="provider_slider_container col-lg-5 d-none d-lg-block">
					<div className="slider_text">
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam . Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
					</div>
				</div>
				<div className="col-12 provider_slider_buttons">
					<button className="btn btn-primary shadow-none">Ver más</button>
				</div>
			</div>
			<div className="testimonialsContainer row">
				<div className="col-12 col-lg-5 offset-lg-3 title">La confianza de nuestros clientes, dice mas de lo que podriamos decirte nosotros</div>
				<div className="col-lg-12">
					<div className="row">
						<div className="col-12 col-lg-3 offset-lg-3 testimony">
							<img src={tes1} />
							<img src={quote} className="d-none d-lg-block" />
							<div className="d-block d-sm-none col-6 col-lg-3 offset-lg-3 name">Henry Vizcarra</div>
							<span>Desplazar a nuestra abuelita de 92 años para paseos o atenciones en clínicas era extenuante, gracias a Solvae la silla salvaescalera nos facilitó el desplazamiento y prescindir de las ayudas de los serenos.</span>
						</div>
						<div className="col-12 col-lg-3 offset-lg-1 testimony">
							<img src={tes2} />
							<img src={quote} className="d-none d-lg-block" />
							<div className="d-block d-sm-none col-6 col-lg-3 offset-lg-1 name">Ana Bueno</div>
							<span>Antes de tener la silla salvaescalera, no tenía la posibilidad de salir a la calle. Subir y bajar escaleras era bastante complicado, los pasamanos en caso de mi enfermedad no son de gran ayuda, me sentía encerrado en el primer piso de mi casa. Después de la instalación de la silla salvaescalera, experimente la sensación de libertad.</span>
						</div>
						<div className="d-none d-lg-block col-6 col-lg-3 offset-lg-3 name">Henry Vizcarra</div>
						<div className="d-none d-lg-block col-6 col-lg-3 offset-lg-1 name">Ana Bueno</div>
					</div>
				</div>
			</div>
			<div className="clientsContainer row">
				<div className="col-12 col-lg-2 offset-lg-2 texto">Trabajamos junto a:</div>
				<div className="col-12 col-lg-2 text-center"><img src={client1} /></div>
				<div className="col-12 col-lg-2 text-center"><img src={client2} /></div>
				<div className="col-12 col-lg-2 text-center"><img src={client4} /></div>
			</div>
		</div>
	);
};

export default HomePage;
