import { pets } from '../../../data';

const getPet = ({ query: { id } }, res) => {
	console.log(id);
	const filtered = pets.filter((pet) => pet.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({
			message: `Pet with the id of ${id} is not found`,
		});
	}
};

export default getPet;
