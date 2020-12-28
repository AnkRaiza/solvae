import React from 'react';
import imageContact from '../assets/images/IMG_CONTACT.png';
import iconPhone from '../assets/images/ICON_PHONE.png';
import iconMail from '../assets/images/ICON_MAIL.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact-page.scss';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: "",
			correo: "",
			direccion: "",
			empresa: "",
			numero: "",
			mensaje: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		var contenido = `nombre: ${this.state.nombre}
		correo: ${this.state.correo}
		direccion: ${this.state.direccion}
		empresa: ${this.state.empresa}
		numero: ${this.state.numero}
		mensaje: ${this.state.mensaje}`;
		toast(contenido);
		event.preventDefault();
	}
	render() {
		return (
			<div className="main_container col-12 white">
				<div className="row title_container">
					<div className="col offset-lg-2">
						<h2>Hablemos<br /> un poco</h2>
						<p>Coloca tus datos y nos comunicaremos<br /> contigo rápidamente.</p>
						<img src={imageContact} />
					</div>
				</div>
				<div className="row form_container">
					<div className="col-lg-2 offset-lg-2 data">
						<div><img src={iconPhone} />(+01) 439-9037</div>
						<div><img src={iconMail} />ventas@solvae.pe</div>
					</div>
					<div className="col-lg-2 inputs_container">
						<label>Nombre</label>
						<input name="nombre" value={this.state.nombre} onChange={this.handleChange} />
						<label>Correo</label>
						<input name="correo" value={this.state.correo} onChange={this.handleChange} />
						<label>Direccion</label>
						<input name="direccion" value={this.state.direccion} onChange={this.handleChange} />
						<label>Empresa</label>
						<input name="empresa" value={this.state.empresa} onChange={this.handleChange} />
						<label>Numero</label>
						<input name="numero" value={this.state.numero} onChange={this.handleChange} />
					</div>
					<div className="col-lg-4 textarea_container">
						<label>Mensaje</label>
						<textarea name="mensaje" value={this.state.mensaje} onChange={this.handleChange} />
					</div>
					<div className="col-lg-8 offset-lg-2 text-right button_container">
						<a onClick={this.handleSubmit} className="btn btn-primary">Enviar</a>
					</div>
					<ToastContainer />
				</div>
			</div>
		);
	}
}

export default Contact;
