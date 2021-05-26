import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addMovies } from '../actions/moviesAction'
import { makeStyles, Typography, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	textField: {
		marginBottom: '10px',
		width: '35ch',
	},
}))
const MovieForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const initialValues = {
		movieName: '',
		ranking: '',
		id: '',
	}

	const validateForm = () => {
		const validate = Yup.object({
			movieName: Yup.string().required('Movie Name is Required'),

			ranking: Yup.number().required('Ranking is Required'),
		})
		return validate
	}

	const onSubmit = (values, onSubmitProps) => {
		values.id = Number(new Date())

		dispatch(addMovies(values))
		onSubmitProps.resetForm()
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validateForm(),
		onSubmit: onSubmit,
	})
	return (
		<div>
			<Typography variant='h3'>Add Movie</Typography>
			<form onSubmit={formik.handleSubmit} className={classes.root}>
				<TextField
					className={classes.textField}
					variant='outlined'
					type='text'
					name='movieName'
					value={formik.values.movieName}
					onChange={formik.handleChange}
					error={formik.touched.movieName && Boolean(formik.errors.movieName)}
					helperText={formik.touched.movieName && formik.errors.movieName}
					placeholder='Enter Movie Name'
				/>

				<TextField
					className={classes.textField}
					type='number'
					variant='outlined'
					name='ranking'
					value={formik.values.ranking}
					onChange={formik.handleChange}
					error={formik.touched.ranking && Boolean(formik.errors.ranking)}
					helperText={formik.touched.ranking && formik.errors.ranking}
					placeholder='IMDB Ranking'
				/>

				<Button
					variant='contained'
					color='primary'
					className={classes.textField}
					type='submit'>
					Add Movie
				</Button>
			</form>
		</div>
	)
}

export default MovieForm
