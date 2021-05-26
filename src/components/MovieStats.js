import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, Typography, Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		marginTop: '10px',
		textAlign: 'center',
		title: {
			fontSize: 28,
		},

		pos: {
			marginBottom: 12,
		},
	},
})

const MovieStats = () => {
	const movies = useSelector((state) => {
		return state.movies
	})

	const topRankedMovie = (movie) => {
		const rank = movie.map((e) => e.ranking)

		const topRank = movie.find((ele) => ele.ranking === Math.max(...rank))

		//console.log(topRank)

		return topRank
	}

	const topMovie = topRankedMovie(movies)

	const classes = useStyles()
	return (
		<div>
			{movies.length > 0 ? (
				<div className={classes.root}>
					<Card variant='outlined'>
						<CardContent>
							<Typography variant='h4'>Movie Stats</Typography>
							<Typography>Total Movies - {movies.length}</Typography>
							<Typography>Top Ranked Movie</Typography>
							<Typography color='primary' variant='h4'>
								{topMovie.movieName.toUpperCase()}
							</Typography>
							<Typography color='textSecondary' variant='h5'>
								#{topMovie.ranking}
							</Typography>
						</CardContent>
					</Card>
				</div>
			) : (
				<Typography variant='h4'>No movies Added</Typography>
			)}
		</div>
	)
}

export default MovieStats
