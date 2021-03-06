import React, {useState} from 'react';
import styles from './reviewStyles.module.sass'
import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import PropTypes from "prop-types";


function Review(props) {

    const [dateReview] = useState(() => {
        return moment(props.review.created_at).utc(true).format('DD/MM/YYYY HH:mm')
    });

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.flexRow}>
                <span className={styles.userName}>{props.review.created_by.username}</span>
                <Rating name='read-only' value={props.review.rate} readOnly size="small"/>
            </div>
            <p className={styles.reviewText}>{props.review.text}</p>
            <span className={styles.dateItem}>{dateReview}</span>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.object,
    created_at: PropTypes.string,
    created_by: PropTypes.object,
    username: PropTypes.string,
    text: PropTypes.string,
};

export default Review;