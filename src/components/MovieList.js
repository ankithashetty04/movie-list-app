import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import FilterResults from 'react-filter-search'
import _ from 'lodash'
import {
	makeStyles,
	Grid,
	Card,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	card: {
		minWidth: 275,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

const MovieList = () => {
	const movies = useSelector((state) => {
		return state.movies
	})

	const [moviesData, setMoviesData] = useState('')
	const [searchinput, setSearchInput] = useState('')
	const [sortBy, setSortBy] = useState('')
	const [orderBy, setOrderBy] = useState('')

	useEffect(() => {
		setMoviesData(movies)
		setSortBy('')
		setOrderBy('')
	}, [movies])

	const handleChange = (e) => {
		setSearchInput(e.target.value)
	}

	const handleSortChange = (e) => {
		setSortBy(e.target.value)

		if (e.target.value === 'Name') {
			//setMoviesData(movies)
			const sortByName = _.sortBy(movies, (o) => o.movieName)
			setMoviesData([...sortByName])
		} else if (e.target.value === 'Ranking') {
			//setMoviesData(movies)
			const sortByRanking = _.sortBy(movies, (o) => o.ranking)
			setMoviesData([...sortByRanking])
		}
	}

	const handleOrderChange = (e) => {
		setOrderBy(e.target.value)
		if (e.target.value === 'asc') {
			const orderByAsc = _.orderBy(movies, (m) => m.ranking, ['asc'])
			setMoviesData(orderByAsc)
		} else if (e.target.value === 'desc') {
			const orderByDsc = _.orderBy(movies, (m) => m.ranking, ['desc'])
			setMoviesData(orderByDsc)
		}
	}

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={8}>
				<Grid item xs={4}>
					<TextField
						className={classes.formControl}
						variant='outlined'
						type='text'
						value={searchinput}
						onChange={handleChange}
						placeholder='search'
					/>
				</Grid>
				<Grid item xs={2}>
					<FormControl variant='outlined' className={classes.formControl}>
						<InputLabel id='demo-simple-select-outlined-label'>Sort By</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={sortBy}
							onChange={handleSortChange}
							label='Sort'>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value='Name'>Name</MenuItem>
							<MenuItem value='Ranking'>Ranking</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={1}>
					<FormControl variant='outlined' className={classes.formControl}>
						<InputLabel id='demo-simple-select-outlined-label'>Order By</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={orderBy}
							onChange={handleOrderChange}
							label='Sort'>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value='asc'>Ascending</MenuItem>
							<MenuItem value='desc'>Descending</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<FilterResults
				value={searchinput}
				data={[...moviesData]}
				renderResults={(results) => (
					<Grid container spacing={3}>
						{results.map((movie) => {
							return (
								<Grid item xs={10} sm={5}>
									<Card className={classes.card} variant='outlined' key={movie.id}>
										<MovieCard key={movie.id} {...movie} />
									</Card>
								</Grid>
							)
						})}
					</Grid>
				)}
			/>
		</div>
	)
}

export default MovieList
