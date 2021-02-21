import dbConnect from '../../utils/dbConnect';
import Pet from '../../models/Pet';
import Link from 'next/link';

export async function getStaticProps() {
	await dbConnect();
	const res = await Pet.find();
	const pets = JSON.parse(JSON.stringify(res));
	return { props: { pets: pets } };
}

const petsPage = ({ pets }) => {
	return (
		<ul className='list-group'>
			{pets.map((pet) => (
				<li
					key={pet._id}
					className='list-group-item list-group-item-action'
				>
					<Link href={`/pets/${pet._id}`}>
						<a>{pet.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default petsPage;
