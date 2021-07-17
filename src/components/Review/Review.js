import React, {useState} from 'react';
import styles from './reviewStyles.module.sass'
import Rating from "@material-ui/lab/Rating";


function Review(props) {

    return (
        <div className={styles.reviewContainer}>
            <span>{props.review.created_by.username}</span>
            <p>{props.review.text}</p>
            <Rating className={styles.ratingClass} name='read-only' value={props.review.rate} readOnly  size="small"/>

            <span>{props.review.created_at}</span>
        </div>
    );
}

export default Review;