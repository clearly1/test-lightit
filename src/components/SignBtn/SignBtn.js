import React from 'react';
import styles from './signBtnStyles.module.sass'
import PropTypes from 'prop-types';
import {changeIsSignIn, changeSignInUpFormIsOpen} from "../../features/signInUpForm/signInUpFormSlice";
import {useDispatch} from "react-redux";

function SignBtn(props) {

    const dispatch = useDispatch();

    return (
        <button className={styles.signBtn} style={props.btnStyles} onClick={()=>{
            if(props.name === 'Вход'){
                dispatch(changeIsSignIn(true))
            }else {
                dispatch(changeIsSignIn(false))
            }
            dispatch(changeSignInUpFormIsOpen())
        }}>
            {props.name}
        </button>
    );
}

SignBtn.propTypes ={
    name: PropTypes.string,
    btnStyles: PropTypes.object,
};

export default SignBtn;