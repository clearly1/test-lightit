import React from 'react';
import styles from './headerStyles.module.sass'
import SignBtn from "../SignBtn/SignBtn";
import {useDispatch, useSelector} from "react-redux";
import {selectSignInUpForm} from "../../features/signInUpForm/signInUpFormSlice";
import SignInUpForm from "../SignInUpForm/SignInUpForm";
import {selectAuth, setUsername} from "../../features/auth/authSlice";

function Header(props) {

    const signInUpForm = useSelector(selectSignInUpForm);
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setUsername(null));
        document.cookie = 'username=; expires='+ new Date().toUTCString();
        document.cookie = 'token=; expires='+ new Date().toUTCString();
        window.location.href = "/";
    };

    return (
        <header className={styles.headerContainer}>
            <a href="/"><h1>Test LightIT</h1></a>
            <div>
                {
                    auth.username ?
                        <>
                            <span className={styles.authenticated}>{auth.username}</span>
                            <span className={styles.authenticated} onClick={logOut}>Выйти</span>
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

export default Header;