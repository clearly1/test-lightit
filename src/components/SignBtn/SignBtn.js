import React from 'react';
import styles from './signBtnStyles.module.sass'
import PropTypes from 'prop-types';

function SignBtn(props) {


    return (
        <button className={styles.signBtn} style={props.btnStyles}>
            {props.name}
        </button>
    );
}

SignBtn.propTypes ={
    name: PropTypes.string,
    btnStyles: PropTypes.object,
};

export default SignBtn;