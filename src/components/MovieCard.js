import React from 'react'
import {Card} from 'react-bootstrap'
import '../App.css'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {

    return (
        <div className='movieCard'>                      
                <Card className="card" style={{ width:'16rem'}}>
                    <Card.Img style={{width:'15.7rem', margin:'0.5%'}} variant="top" src={movie.posterURL} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>{movie.title}</Card.Title>
                        <Card.Text className='desc'>
                        {movie.description}
                        </Card.Text>
                        <StarRatingComponent 
                            // name="rate2" 
                            // editing={false}
                            // renderStarIcon={() => <span></span>}
                            // starCount={5}
                            value={movie.rating}
                            className='rating'
                        />
                        <Link className='trailer' to={`/movie/${movie.title}`}>TRAILER</Link>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default MovieCard