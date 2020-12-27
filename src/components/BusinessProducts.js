import React from 'react';
import imageBusiness from '../assets/images/IMG_BUSSINESS.png';
import bullet from '../assets/images/BROCHURE_BULLET.png';
import prodHome1 from '../assets/images/PROD_BUSINESS_1.png';
import prodHome2 from '../assets/images/PROD_BUSINESS_2.png';
import prodHome3 from '../assets/images/PROD_BUSINESS_3.png';
import prodHome4 from '../assets/images/PROD_BUSINESS_4.png';
import '../styles/home-products-page.scss';

const BusinessProducts = () => {
	return (
		<div className="main_container">
			<div className="row title_container">
				<h2 className="col-12 text-center">Titular de la categoría<br />Productos para empresas</h2>
				<p className="col-6 offset-3 text-center">
					<strong>Párrafo descriptivo de la sección.</strong> Consectetur adipiscing elit. Curabitur tristique sollicitudin nisl, sollicitudin porta tortor hendrerit ut.
				</p>
			</div>
			<div className="row">
				<img className="col image" src={imageBusiness} alt="imagen corporativa" />
			</div>
			<div className="row midleTextContainer">
				<p className="col-8 offset-2 text-center">Párrafo descriptivo de los productos en general. consectetur adipiscing elit. Curabitur tristique sollicitudin nisl, sollicitudin porta tortor hendrerit ut. Curabitur metus lacus, condimentum sed consectetur vitae, ultricies sit amet felis.</p>
			</div>
			<div className="row products_container">
				<div className="col-4 offset-2">
					<div className="item">
						<img src={prodHome1} alt="producto hogar" />
						<h2>Ascensores</h2>
						<div>Descriptcion breve y concisa del producto lorem ipsum  asfdas asd as as dasas dsa</div>
						<a target="_blank" rel="noopener noreferrer" href="https://www.elsaber21.com/wp-content/uploads/2017/05/Guia-de-Dota-2-en-Espanol-elsbaer21.pdf" className="btn btn-primary shadow-none">Catalogo online del producto<img src={bullet} alt="arrow link" /></a>
					</div>
				</div>
				<div className="col-4">
					<div className="item">
						<img src={prodHome2} alt="producto hogar" />
						<h2>Escaleras mecanicas y rampas moviles</h2>
						<div>Descriptcion breve y concisa del producto lorem ipsum  asfdas asd as as dasas dsa</div>
						<a target="_blank" rel="noopener noreferrer" href="https://www.elsaber21.com/wp-content/uploads/2017/05/Guia-de-Dota-2-en-Espanol-elsbaer21.pdf" className="btn btn-primary shadow-none">Catalogo online del producto<img src={bullet} alt="arrow link" /></a>
					</div>
				</div>
				<div className="col-4 offset-2">
					<div className="item">
						<img src={prodHome3} alt="producto hogar" />
						<h2>Duplicadores de estacionamiento</h2>
						<div>Descriptcion breve y concisa del producto lorem ipsum  asfdas asd as as dasas dsa</div>
						<a target="_blank" rel="noopener noreferrer" href="https://www.elsaber21.com/wp-content/uploads/2017/05/Guia-de-Dota-2-en-Espanol-elsbaer21.pdf" className="btn btn-primary shadow-none">Catalogo online del producto<img src={bullet} alt="arrow link" /></a>
					</div>
				</div>
				<div className="col-4">
					<div className="item">
						<img src={prodHome4} alt="producto hogar" />
						<h2>Accesibilidad</h2>
						<div>Descriptcion breve y concisa del producto lorem ipsum  asfdas asd as as dasas dsa</div>
						<a target="_blank" rel="noopener noreferrer" href="https://www.elsaber21.com/wp-content/uploads/2017/05/Guia-de-Dota-2-en-Espanol-elsbaer21.pdf" className="btn btn-primary shadow-none">Catalogo online del producto<img src={bullet} alt="arrow link" /></a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessProducts;
