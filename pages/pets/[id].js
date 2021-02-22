import Pet from '../../models/Pet';
import { useRouter } from 'next/router';
import dbConnect from '../../utils/dbConnect';

const petPage = ({ pet }) => {
	// const router = useRouter();
	// if (router.isFallback) {
	// 	return 'Loading...';
	// }
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
		// fallback: true,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params }) => {
	await dbConnect();

	const pet = await Pet.findById(params.id);

	return {
		props: { pet: JSON.parse(JSON.stringify(pet)) },
		revalidate: 1,
	};
};

export default petPage;
