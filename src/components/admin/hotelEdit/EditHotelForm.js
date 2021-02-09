import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Col, Row, Form, Button } from 'react-bootstrap/';

import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required('Please fill out the field'),
	address: yup.string().required('Please fill out the field'),
	image: yup.string().required('Please fill out the field'),
	lat: yup.number().required('Please fill out the field'),
	lng: yup.number().required('Please fill out the field'),
	price: yup.number().required('Please fill out the field'),
	email: yup.string().required('Please write your Email').email(),
	description: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters')
		.max(100, 'Message can not be longer then 100 characters'),
});

function EditHotelForm({
	onSubmit,
	email,
	image,
	price,
	maxGuests,
	lat,
	lng,
	description,
	address,
	name,
	btnName,
}) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row className='d-flex justify-content-around'>
				<Col md={5}>
					<Form.Row>
						<Form.Group as={Col} md='10' controlId='name'>
							<Form.Label>Accommodation name</Form.Label>
							<Form.Control
								defaultValue={name}
								type='text'
								name='name'
								ref={register}
								isInvalid={errors.name}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.name && <p>{errors.name.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								defaultValue={email}
								type='text'
								name='email'
								ref={register}
								isInvalid={errors.email}
								placeholder='Enter email'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.email && <p>{errors.email.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='maxGuest'>
							<Form.Label>Guest Capacity</Form.Label>
							<Form.Control
								defaultValue={maxGuests}
								type='number'
								name='maxGuests'
								ref={register}
								isInvalid={errors.max}
								placeholder='Maximum guest capacity..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.max && <p>{errors.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='description'>
							<Form.Label>Send us a message</Form.Label>
							<Form.Control
								defaultValue={description}
								name='description'
								as='textarea'
								placeholder='Description..'
								rows={3}
								ref={register}
								isInvalid={errors.description}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.description && <p>{errors.description.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
				</Col>
				<div className='border-right d-none d-md-block d-lg-block'></div>
				<Col md={5}>
					<Form.Row>
						<Form.Group as={Col} md='10' controlId='image'>
							<Form.Label>image</Form.Label>
							<Form.Control
								defaultValue={image}
								type='text'
								name='image'
								ref={register}
								isInvalid={errors.image}
								placeholder='image URL'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.image && <p>{errors.image.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='price'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								defaultValue={price}
								type='number'
								name='price'
								ref={register}
								isInvalid={errors.price}
								placeholder='price pr night..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.price && <p>{errors.price.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='address'>
							<Form.Label>Address</Form.Label>
							<Form.Control
								defaultValue={address}
								type='text'
								name='address'
								ref={register}
								isInvalid={errors.address}
								placeholder='price pr night..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.address && <p>{errors.address.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='lat'>
							<Form.Label>Latitude</Form.Label>
							<Form.Control
								defaultValue={lat}
								type='number'
								name='lat'
								ref={register}
								isInvalid={errors.lat}
								placeholder='Enter latitude..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.lat && <p>{errors.lat.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='lng'>
							<Form.Label>Longitude</Form.Label>
							<Form.Control
								defaultValue={lng}
								type='number'
								name='lng'
								ref={register}
								isInvalid={errors.lng}
								placeholder='Enter longitude..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.lng && <p>{errors.lng.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
				</Col>
			</Row>
			<Button className='form__btn btn btn__primary' type='submit'>
				{btnName}
			</Button>
		</Form>
	);
}

EditHotelForm.propTypes = {
	name: PropTypes.string,
	onSubmit: PropTypes.func,
	email: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	maxGuests: PropTypes.number,
	lat: PropTypes.number,
	lng: PropTypes.number,
	description: PropTypes.string,
	address: PropTypes.string,
	id: PropTypes.string,
	btnName: PropTypes.string,
};

export default EditHotelForm;

/*{' '}
				<form
					onSubmit={handleSubmit(onSubmit)}
					key={(email, name, image, price, maxGuests, description)}>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<TextField
							required
							name='name'
							inputRef={register}
							label='Name of Accommodation'
							defaultValue={name}
							margin='normal'
						/>
						<TextField
							name='email'
							inputRef={register}
							label='e-mail'
							required
							margin='normal'
							defaultValue={email}
						/>
					</Grid>
					<TextField
						name='image'
						label='Image link'
						placeholder={image}
						inputRef={register}
						required
						fullWidth
						margin='normal'
						defaultValue={image}
					/>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<Input
							type='number'
							name='price'
							inputRef={register}
							defaultValue={price}
							startAdornment={
								<InputAdornment position='start'>€</InputAdornment>
							}
						/>
						<Input
							type='number'
							name='maxGuests'
							inputRef={register}
							defaultValue={maxGuests}
							startAdornment={
								<InputAdornment position='start'>Guests</InputAdornment>
							}
						/>
					</Grid>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<Input
							type='number'
							name='lat'
							inputRef={register}
							defaultValue={lat}
							startAdornment={
								<InputAdornment position='start'>lat</InputAdornment>
							}
						/>
						<Input
							type='number'
							name='lng'
							inputRef={register}
							defaultValue={lng}
							startAdornment={
								<InputAdornment position='start'>lng</InputAdornment>
							}
						/>
					</Grid>
					<TextField
						name='description'
						label='Description of accommodation'
						as='textarea'
						rows={3}
						inputRef={register}
						fullWidth
						margin='normal'
						multiline
						rowsMax={4}
						variant='outlined'
						defaultValue={description}
					/>
					<TextField
						name='address'
						label='Address'
						inputRef={register}
						required
						fullWidth
						margin='normal'
						defaultValue={address}
					/>
					<ConfirmDelete id={id} deletePath={deletePath} />

					<Button type='submit'>Submit</Button>
				</form>*/
