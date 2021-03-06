import React, {useEffect, useState} from 'react';
import styles from './productStyles.module.sass';
import {mdiChevronDown} from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";

function Product(props) {

    const [openStyle, setOpenStyle] = useState({});

    useEffect(() => {
        if (props.openedProductId === props.product.id) {
            setOpenStyle({
                productContainer: {
                    width: 'calc(100% - 10px)',
                    height: 'auto',
                    alignItems: 'flex-start',
                },
                descriptionContainer: {
                    height: 'fit-content'
                },
                flexColumn: {
                    flexDirection: 'row'
                },
                productName: {
                    margin: '0'
                },
                mainProductInfoContainer: {
                    margin: '20px 20px 10px'
                },
                imageWrapper: {
                    minWidth: '250px',
                    width: '250px',
                    paddingBottom: '250px',
                }
            })
        } else {
            setOpenStyle({})
        }
    }, [props.openedProductId]);

    return (
        <div className={styles.productContainer} onClick={() => {
            if (props.openedProductId !== props.product.id) {
                props.openProductFunc(props.product.id)
            }
        }} style={openStyle.productContainer}>
            <div className={styles.flexColumn} style={openStyle.flexColumn} onClick={()=>{
                if (props.openedProductId === props.product.id){
                    props.openProductFunc(null)
                }
            }}>
                <div className={styles.imageWrapper} style={openStyle.imageWrapper}>
                    <img src={"https://smktesting.herokuapp.com/static/" + props.product.img} alt="No image"/>
                </div>
                <div className={styles.mainProductInfoContainer} style={openStyle.mainProductInfoContainer}>
                    <span className={styles.productName} style={openStyle.productName}>{props.product.title}</span>
                    <div className={styles.descriptionContainer} style={openStyle.descriptionContainer}>
                        <span className={styles.descriptionLabel}>????????????????:</span>
                        <p>{props.product.text}</p>

                    </div>
                    {
                        props.openedProductId !== props.product.id &&
                        <div className={styles.moreInfoBlock}>
                            <span>Show more</span>
                            <Icon className={styles.mdiChevronDown} path={mdiChevronDown}
                                  size={1}
                                  color="rgba(128, 128, 128, 0.9)"
                            />
                        </div>

                    }
                    {
                        props.openedProductId === props.product.id &&
                        <div className={styles.lessInfoBlock}>
                            <Icon className={styles.mdiChevronDown} path={mdiChevronDown}
                                  size={1} rotate={180}
                                  color="rgba(128, 128, 128, 0.9)"
                            />
                            <span>Show less</span>
                        </div>
                    }
                </div>
            </div>
            {
                props.openedProductId === props.product.id &&
                <ReviewsContainer productId={props.product.id}/>
            }
        </div>
    );
}

Product.propTypes = {
    openedProductId: PropTypes.number,
    product: PropTypes.object,
    openProductFunc: PropTypes.func,
};

export default Product;