import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link href='/'>
				<a className='navbar-brand'>Pet Reminder</a>
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link href='/'>
							<a className='nav-link'>Home</a>
						</Link>
					</li>
					<li className='nav-item'>
						<Link href='/pets'>
							<a className='nav-link'>Pets</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
