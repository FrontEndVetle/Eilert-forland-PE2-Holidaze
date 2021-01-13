import React from 'react';
import Card from 'react-bootstrap/Card';

function HotelCards({ name, id, image, price }) {
	return (
		<Card>
			<Card.Img className='card__img' variant='top' src={image} />
			<Card.Body className='d-flex flex-column card__body'>
				<Card.Title className='card__title card__title--special'>
					{name}
				</Card.Title>
				<Card.Text className='card__info'>{price} </Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HotelCards;
