import React from 'react';
import styles from './headerStyles.module.sass'
import SignBtn from "../SignBtn/SignBtn";
import {useSelector} from "react-redux";
import {selectSignInUpForm} from "../../features/signInUpForm/signInUpFormSlice";
import SignInUpForm from "../SignInUpForm/SignInUpForm";

function Header(props) {

    const signInUpForm = useSelector(selectSignInUpForm);

    return (
        <header className={styles.headerContainer}>
            <a href="/"><h1>Test LightIT</h1></a>
            <div>
                <SignBtn name="Вход" />
                <SignBtn name="Регистрация" btnStyles={{
                    backgroundColor: "black",
                    borderColor: "white",
                    color: "white"
                }}/>
            </div>
            {
                signInUpForm.isOpen &&
                    <SignInUpForm/>
            }
        </header>
    );
}

export default Header;