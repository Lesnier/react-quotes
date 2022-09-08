import { useEffect } from 'react';
import Paciente from './Paciente';

function PatientList({ pacientes, setPaciente, eliminarPaciente }) {
	return (
		<div className="md:w-1/2 lg:w-3/5 ">
			{pacientes && pacientes.length ? (
				<>
					<h2 className=" font-black text-3xl text-center">Listado de Pacientes</h2>
					<p className="text-lg mt-5 text-center mb-10">
						Administra tus &nbsp;
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
					<div className="md:h-screen overflow-y-auto">
						{pacientes.map((paciente) => {
							return <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />;
						})}
					</div>
				</>
			) : (
				<>
					<h2 className=" font-black text-3xl text-center">No hay Pacientes</h2>
					<p className="text-lg mt-5 text-center mb-10">
						Comienza agregando pacientes &nbsp;
						<span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
					</p>
					<div className="md:h-screen overflow-y-auto">
						{pacientes.map((paciente) => {
							return <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} />;
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default PatientList;
