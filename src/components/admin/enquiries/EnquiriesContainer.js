import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import EnquiriesList from './EnquiriesList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function EnquiriesContainer() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const url = BASE_URL + 'enquiries';

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					setError(json.message);
				} else {
					setHotels(json);
				}
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Container>
			<Row>
				<h1> Hotels </h1> {error && <div className='error'> {error} </div>}{' '}
				{hotels.map((hotel, i) => {
					const { name, email, message, createdAt, checkIn, checkOut } = hotel;
					return (
						<EnquiriesList
							key={i}
							name={name}
							email={email}
							message={message}
							createdAt={createdAt}
							checkIn={checkIn}
							checkOut={checkOut}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default EnquiriesContainer;
