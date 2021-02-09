import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

type Props = {
	title: string;
	infoList: string;
	image: string;
};

function HomeInfoCards({ title, infoList, image }: Props) {
	return (
		<Card className='card'>
			<Card.Img
				variant='top'
				className='card__img'
				src={image}
				alt='Homepage information image'
			/>
			<Card.Body>
				<Card.Title>
					<h2 className='card__title font-special'> {title}</h2>
				</Card.Title>

				<ListGroup className='card__text' variant='flush'>
					<ListGroup.Item>{infoList}</ListGroup.Item>
				</ListGroup>

				<NavLink to='/accommodation'>
					<Button className='card__btn btn'>Accommodations</Button>
				</NavLink>
			</Card.Body>
		</Card>
	);
}

export default HomeInfoCards;
