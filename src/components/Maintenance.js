import React from 'react';
import imageServices from '../assets/images/IMG_SERVICES.png';
import services1 from '../assets/images/SERVICES_1.png';
import services2 from '../assets/images/SERVICES_2.png';
import services3 from '../assets/images/SERVICES_3.png';
import '../styles/services-page.scss';

const Maintenance = () => {
	return (
		<div className="main_container col-lg-12">
			<div className="row title_container">
				<h2 className="col-lg-12 text-center">Titular de la categoría<br />Productos para hogar</h2>
				<p className="col-lg-6 offset-lg-3 text-center">
					<strong>Párrafo descriptivo de la sección.</strong> Consectetur adipiscing elit. Curabitur tristique sollicitudin nisl, sollicitudin porta tortor hendrerit ut.
				</p>
			</div>
			<div className="row">
				<img className="col image" src={imageServices} alt="imagen corporativa" />
			</div>
			<div className="row midleTextContainer">
				<p className="col-lg-8 offset-lg-2 text-center">Párrafo descriptivo de los productos en general. consectetur adipiscing elit. Curabitur tristique sollicitudin nisl, sollicitudin porta tortor hendrerit ut. Curabitur metus lacus, condimentum sed consectetur vitae, ultricies sit amet felis.</p>
			</div>
			<div className="row bg-primary services_container">
				<div className="col-lg-2 offset-lg-3 text-center">
					<h2>24 Horas</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
				</div>
				<div className="col-lg-2 text-center">
					<h2>365 Dias</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
				</div>
				<div className="col-lg-2 text-center">
					<h2>Todas las marcas</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
				</div>
			</div>
			<div className="row services_image_container">
				<div className="col-12 text-center title">Nos encargamos de:</div>
				<div className="col-12">
					<div className="row justify-content-center">
						<div className="col-lg-3">
							<div className="row item_container justify-content-center">
								<div className="col-11 item">
									<img src={services1} />
									<h2>Instalar</h2>
									<p>Contamos con una amplia gama de soluciones. Realizamos nuestras instalaciones tanto en construcciones de obra nueva como en edificios ya construidos.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="row item_container justify-content-center">
								<div className="col-11 item">
									<img src={services2} />
									<h2>Mantener</h2>
									<p>Realizamos un mantenimiento correcto en la forma y plazo recomendados por los fabricantes; cumplimos con las normativas que garantízan su seguridad y la de su familia.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="row item_container justify-content-center">
								<div className="col-11 item">
									<img src={services3} />
									<h2>Reparar</h2>
									<p>Contamos con un equipo técnico excepcional, capaz de atender cualquier necesidad o avería. Estamos disponibles todos los días del año y a toda hora.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Maintenance;
