import React from 'react';
import styles from '../styles/Dashboard.module.css';
import Navbar from '../components/Navbar/Navbar';

import axios from 'axios';

const authAxios = axios.create({
	// baseURL: 'https://reddit-forum-api.vercel.app',
	baseURL: 'http://localhost:5000',
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
});
const dashboard = ({ data }) => {
	let login = false;

	console.log(data);
	return (
		<div>
			<Navbar />
			{/* <h1 className={login ? styles.dashboardHeader : styles.dashboardHeaderActive}>Dashboard page</h1> */}
			<h1 style={{ marginTop: '100px', textAlign: 'center' }}>Dashboard page</h1>
			{/* <p>{JSON.stringify(data)}</p> */}
		</div>
	);
};

export const getServerSideProps = async (context) => {
	let users = null;
	try {
		// const { data } = await authAxios.get('/user/forumusers');
		const res = await fetch('http://localhost:5000/user/forumusers', {
			method: 'GET',
			credentials: 'include',
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
				Cookie: context.req.headers.cookie
			}
		});

		let data = await res.json();

		users = data;
	} catch (error) {
		users = null;
		// console.log(error)
	}
	return {
		props: {
			data: users
		}
	};
};
export default dashboard;
