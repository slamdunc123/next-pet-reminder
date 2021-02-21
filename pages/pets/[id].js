import Pet from '../../models/Pet';
import dbConnect from '../../utils/dbConnect';

export const getStaticPaths = async () => {
	await dbConnect();
	const res = await Pet.find();
	const pets = JSON.parse(JSON.stringify(res));

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
	return (
		<>
			{console.log(pet)}
			<h1>{pet.name}</h1>
			<p>{pet.desc}</p>
			<p>{pet.age}</p>
			<p>{pet.dob}</p>
		</>
	);
};

export default petPage;
