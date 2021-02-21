import Link from 'next/link';

const Pets = ({ pets }) => {
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

export default Pets;
