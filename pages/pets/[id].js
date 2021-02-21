import Link from 'next/link';

import Pet from '../../models/Pet';
import dbConnect from '../../utils/dbConnect';

export const getStaticPaths = async () => {
	await dbConnect();
	const results = await Pet.find();
	const pets = JSON.parse(JSON.stringify(results));

	const paths = pets.map((pet) => {
		return {
			params: { id: pet._id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	await dbConnect();

	const pet = await Pet.findById(params.id);

	return {
		props: { pet: JSON.parse(JSON.stringify(pet)) },
	};
};

const petPage = ({ pet }) => {
	console.log('pet in page', pet);
	return <h1>{pet.name}</h1>;
};

export default petPage;
