import React, {useState} from 'react';
import styles from './productStyles.module.sass'
import Rating from '@material-ui/lab/Rating';
import {mdiChevronDown} from '@mdi/js';
import Icon from '@mdi/react'

function Product(props) {

    /*const [value] = useState(3.6);*/

    return (
        <div className={styles.productContainer}>
            <div className={styles.imageWrapper}>
                <img src={"https://smktesting.herokuapp.com/static/" + props.product.img} alt="No image"/>
            </div>
            <div className={styles.mainProductInfoContainer}>
                <span className={styles.productName}>{props.product.title}</span>
                <div className={styles.descriptionContainer}>
                    <span>Описание:</span>
                    <p>{props.product.text}</p>
                </div>
                <div className={styles.moreInfoBlock}>
                    <span>Show more</span>
                    <Icon className={styles.mdiChevronDown} path={mdiChevronDown}
                          size={1}
                          color="rgba(128, 128, 128, 0.9)"
                    />
                </div>
            </div>
        </div>
    );
}

export default Product;