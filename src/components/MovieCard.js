import React from 'react'
import {useDispatch} from 'react-redux'
import {removeMovie} from '../actions/moviesAction';
import {makeStyles,Typography, Button,CardActions , CardContent} from '@material-ui/core'

const useStyles = makeStyles({
    title: {
        fontSize: 28
    },
    pos: {
        marginBottom : 12
    }
})

const MovieCard = (props) => {
    const {movieName, ranking, id} = props
   
    const dispatch = useDispatch()

    const deleteMovie = (id) => {
        dispatch(removeMovie(id))
    }

    const classes = useStyles()

    return(
           <div>
                   <CardContent >
                        <Typography className = {classes.title}>{movieName.toUpperCase()}</Typography>
                        <Typography  variant = 'h5'> #{ranking}</Typography> 
                    </CardContent>
                    <CardActions className = {classes.pos}>
                        <Button variant="contained" color = 'primary' onClick = {() => {
                                        deleteMovie(id)
                                    }}>delete</Button>
                    </CardActions>
                
           </div>
            
    )
}

export default MovieCard