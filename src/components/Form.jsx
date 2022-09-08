import { useState, useEffect } from 'react';
import Error from './Error';

function Form({ pacientes, setPacientes, paciente, setPaciente }) {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		setNombre(paciente.nombre);
		setPropietario(paciente.propietario);
		setEmail(paciente.email);
		setFecha(paciente.fecha);
		setSintomas(paciente.sintomas);
	}, [paciente]);

	const generarId = () => {
		let date = Date.now().toString(36);
		let random = Math.random().toString(36).substr(2);
		return date + random;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
		} else {
			setError(false);

			const objetoPaciente = {
				nombre,
				propietario,
				email,
				fecha,
				sintomas,
			};

			if (paciente.id) {
				//Editando el registro
				objetoPaciente.id = paciente.id;
				const pacientesActualizados = pacientes.map((pacienteState) => (pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState));
				setPacientes(pacientesActualizados);
				setPaciente({});
			} else {
				//Nuevo Registro
				objetoPaciente.id = generarId();
				setPacientes([...pacientes, objetoPaciente]);
			}

			//Reiniciar formulario
			setNombre('');
			setPropietario('');
			setEmail('');
			setFecha('');
			setSintomas('');
		}
	};

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y &nbsp;
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-10 m-3">
				{error && <Error message="Todos los campos son obligatorios" />}
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
						Nombre Mascota
					</label>
					<input value={nombre} onChange={(e) => setNombre(e.target.value)} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
				</div>
				<div className="mb-5">
					<label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
						Nombre Propietario
					</label>
					<input value={propietario} onChange={(e) => setPropietario(e.target.value)} id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="block text-gray-700 uppercase font-bold">
						Email
					</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
				</div>
				<div className="mb-5">
					<label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
						Alta
					</label>
					<input value={fecha} onChange={(e) => setFecha(e.target.value)} id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
				</div>
				<div className="mb-5">
					<label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
						Síntomas
					</label>
					<textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
				</div>
				<input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
			</form>
		</div>
	);
}

export default Form;
