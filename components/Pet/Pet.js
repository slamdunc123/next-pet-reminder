import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faCaravan } from '@fortawesome/free-solid-svg-icons';

const Pet = () => {
	// console.log('pet in Pet component', pet);
	// const { name } = pet;
	return (
		<div className='card'>
			<h5 className='card-header'>Pet Details</h5>
			<div className='card-body'>
				{/* <h5 className='card-title'>{name}</h5>
				<FontAwesomeIcon icon={faCampground}></FontAwesomeIcon>
				<FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon> */}
			</div>
		</div>
	);
};

export default Pet;
