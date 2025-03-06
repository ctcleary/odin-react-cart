// import { useParams } from "react-router-dom";
import './RatingStars.css';
import starsFull from './assets/stars_full.png';
import starsEmpty from './assets/stars_empty.png';
import PropTypes from 'prop-types';

function RatingStars({ rating, ratingCount }) {

    const width = ((rating * 2) * 10);
    const widthStr = width + '%';
    
    return (
        <div className="rating-stars">
            <img className="rating-stars-empty" src={starsEmpty} alt={`Rating: ${rating} / 5`}/>
            <div className="rating-stars-full-container" style={{ width: widthStr }}>
                <img className="rating-stars-full" src={starsFull} alt={`Rating: ${rating} / 5`}/>
            </div>
            <span className="rating-stars-count">({ratingCount})</span>
        </div>
    )
}

RatingStars.propTypes = {
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
}

export default RatingStars;
