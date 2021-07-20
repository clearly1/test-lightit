import React, {useEffect, useState} from 'react';
import styles from './reviewsContainerStyles.module.sass'
import Review from "../Review/Review";
import LoadingElem from "../LoadingElem/LoadingElem";
import {getReviewsByProductId} from "../../api";
import ReviewForm from "../ReviewForm/ReviewForm";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {changeIsSignIn, changeSignInUpFormIsOpen} from "../../features/signInUpForm/signInUpFormSlice";
import {selectAuth} from "../../features/auth/authSlice";

function ReviewsContainer(props) {

    const [newReview, setNewReview] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);

    useEffect(()=>{
        console.log('useEffect');
        getReviewsByProductId(`/api/reviews/${props.productId}`).then(response =>{
            setReviews([...response.data]);
            setLoading(false);
        });
    },[newReview]);

    return (
        <div className={styles.reviewsContainer}>
            <span>Отзывы:</span>
            {
                auth.username !== null ?
                    <ReviewForm productId={props.productId} setNewReview={setNewReview}/>
                    :
                <div className={styles.authRecommendation}>Чтобы оставлять отзывы <span onClick={()=>{
                    dispatch(changeIsSignIn(true));
                    dispatch(changeSignInUpFormIsOpen());
                }}>войдите</span> или <span onClick={()=>{
                    dispatch(changeIsSignIn(false));
                    dispatch(changeSignInUpFormIsOpen());
                }}>зарегистрируйтесь</span></div>
            }
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

ReviewsContainer.propTypes = {
    productId: PropTypes.number,
    data: PropTypes.array,
};

export default ReviewsContainer;