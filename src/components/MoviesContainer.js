import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import { Container, Grid, Typography } from '@material-ui/core'

const MoviesContainer = () => {
	return (
		<div>
			<Typography
				variant='h2'
				align='center'
				style={{ marginBottom: '1em' }}
				component='h2'>
				My Big Movie List
			</Typography>
			<Grid container spacing={10}>
				<Grid item xs={6}>
					<Container>
						<MovieList />
					</Container>
				</Grid>

				<Grid item xs={5}>
					<Grid item xs={5}>
						<MovieForm />
					</Grid>

					<Grid item xs={6}>
						<MovieStats />
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default MoviesContainer
