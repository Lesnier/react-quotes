function Error({ message }) {
	return (
		<div>
			<div className="bg-red-600 text-white p-3 mb-3 rounded-md border-2 border-red-700">
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Error;
