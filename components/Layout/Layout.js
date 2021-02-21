import Navbar from '../Navbar';
// import Meta from './Meta'
// import Header from './Header';
// import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<>
			{/* <Meta /> */}
			<Head>
				{/* <meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<meta charSet='utf-8' /> */}
				{/* <link rel='icon' href='/favicon.ico' />
				 */}
				<title>Pet Reminder</title>
			</Head>
			<Navbar />

			<div className='container'>
				<Link href='/'>
					<a>Back</a>
				</Link>
				<main>
					{/* <Header /> */}
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
