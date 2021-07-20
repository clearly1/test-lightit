import React, {useEffect, useState} from 'react';
import styles from './reviewsContainerStyles.module.sass'
import Review from "../Review/Review";
import LoadingElem from "../LoadingElem/LoadingElem";
import {getReviewsByProductId} from "../../api";
import ReviewForm from "../ReviewForm/ReviewForm";

function ReviewsContainer(props) {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getReviewsByProductId(`/api/reviews/${props.productId}`).then(response =>{
            setReviews([...response.data]);
            setLoading(false);
        });
    },[]);

    return (
        <div className={styles.reviewsContainer}>
            <span>Отзывы:</span>
            {/*Форма отзыва или предложение войти/зарегистрироваться*/}
            <ReviewForm/>
            {
                loading ? <LoadingElem/>
                : reviews.length !== 0 ?
                    reviews.slice(0).reverse().map(review => (
                        <Review key={review.id} review={review}/>
                    ))
                    :
                    <span>Ваш отзыв может быть первым</span>
            }
        </div>
    );
}

export default ReviewsContainer;