import React from 'react';
import {CircularProgress} from "@material-ui/core";
import styles from './loadingElemStyles.module.sass'

function LoadingElem(props) {

    return (
        <div className={styles.loadingElemContainer}>
            <CircularProgress disableShrink className={styles.loadingElem}/>
        </div>
    );
}

export default LoadingElem;