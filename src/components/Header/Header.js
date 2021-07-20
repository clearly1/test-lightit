import React from 'react';
import styles from './headerStyles.module.sass'
import SignBtn from "../SignBtn/SignBtn";
import {useSelector} from "react-redux";
import {selectSignInUpForm} from "../../features/signInUpForm/signInUpFormSlice";
import SignInUpForm from "../SignInUpForm/SignInUpForm";
import {selectAuth} from "../../features/auth/authSlice";
import PropTypes from "prop-types";

function Header(props) {

    const signInUpForm = useSelector(selectSignInUpForm);
    const auth = useSelector(selectAuth);

    return (
        <header className={styles.headerContainer}>
            <a href="/"><h1>Test LightIT</h1></a>
            <div>
                {
                    auth.username ?
                        <>
                            <span className={styles.authenticated}>{auth.username}</span>
                            <span className={styles.authenticated} onClick={props.logOutFunc}>Выйти</span>
                        </>
                        :
                        <>
                            <SignBtn name="Вход"/>
                            <SignBtn name="Регистрация" btnStyles={{
                                backgroundColor: "black",
                                borderColor: "white",
                                color: "white"
                            }}/>
                        </>
                }
            </div>
            {
                signInUpForm.isOpen &&
                <SignInUpForm/>
            }
        </header>
    );
}

Header.propTypes = {
    logOutFunc: PropTypes.func
};

export default Header;