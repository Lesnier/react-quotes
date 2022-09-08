function Paciente({ paciente, setPaciente, eliminarPaciente }) {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;
	const handlerEliminarPaciente = () => {
		const respuesta = confirm('Deseas Eliminar este paciente ?');
		if (respuesta) eliminarPaciente(id);
	};
	return (
		<div className="m-3 mt-0 bg-white shadow-md px-5 py-10 rounded-md">
			<p className="font-bold text-gray-700 uppercase mb-2">
				Nombre: &nbsp;
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold text-gray-700 uppercase mb-2">
				Propietario: &nbsp;
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold text-gray-700 uppercase mb-2">
				Email: &nbsp;
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold text-gray-700 uppercase mb-2">
				Fecha Alta: &nbsp;
				<span className="font-normal normal-case">{fecha}</span>
			</p>
			<p className="font-bold text-gray-700 uppercase mb-2">
				Síntomas: &nbsp;
				<span className="font-normal normal-case">{sintomas}</span>
			</p>
			<div className="flex justify-between mt-10">
				<button type="button" className="py-2 px-10 bg-indigo-700 text-white font-bold rounded-md " onClick={() => setPaciente(paciente)}>
					Editar
				</button>
				<button type="button" onClick={handlerEliminarPaciente} className="py-2 px-10 bg-red-700 text-white font-bold rounded-md ">
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Paciente;
