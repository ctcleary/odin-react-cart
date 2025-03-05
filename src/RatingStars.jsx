// import { useParams } from "react-router-dom";
import './RatingStars.css';
import starsFull from './assets/stars_full.png';
import starsEmpty from './assets/stars_empty.png';

function RatingStars({ rating, ratingCount }) {

    const width = ((rating * 2) * 10);
    const widthStr = width + '%';
    
    return (
        <div className="rating-stars">
            <img className="rating-stars-empty" src={starsEmpty} alt={`Rating: ${rating} / 5`}/>
            <div className="rating-stars-full" style={{ width: widthStr }}></div>
            <span className="rating-stars-count">({ratingCount})</span>
        </div>
    )
}

export default RatingStars;
