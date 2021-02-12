import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

type Props = {
	btnText: string;
	id?: string;
	linkPath: string;
};

function CardBtn({ linkPath, btnText, id = '' }: Props) {
	return (
		<NavLink to={linkPath + id}>
			<Button className='hotel-card__btn btn btn__primary danger'>
				{btnText}
			</Button>
		</NavLink>
	);
}

export default CardBtn;