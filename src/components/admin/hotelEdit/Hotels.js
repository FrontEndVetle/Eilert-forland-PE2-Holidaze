import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../../constants/api';
import HotelCards from '../../accommodation/HotelCards';
import { Row, Container, Col } from 'react-bootstrap/';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';

function Hotels() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'establishments';
	const linkPath = '/admin/hotels/edit/';
	const btnText = 'Edit';
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: 'Please try and reload the ',
					});
				} else {
					setHotels(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	return (
		<Container>
			<h1> Hotels </h1>

			<Row>
				{hotels &&
					hotels.map((hotel) => {
						const { id, name, image, price, maxGuests } = hotel;
						return (
							<Col xs={12} md={3} key={id}>
								<HotelCards
									maxGuests={maxGuests}
									name={name}
									image={image}
									price={price}
									id={id}
									linkPath={linkPath}
									btnText={btnText}
								/>
							</Col>
						);
					})}
			</Row>
		</Container>
	);
}

export default Hotels;
