import React from 'react';
import styles from './headerStyles.module.sass'
import SignBtn from "../SignBtn/SignBtn";

function Header(props) {

    return (
        <header className={styles.headerContainer}>
            <a href="/"><h1>Test LightIT</h1></a>
            <div>
                <SignBtn name="Вход"/>
                <SignBtn name="Регистрация" btnStyles={{
                    backgroundColor: "black",
                    borderColor: "white",
                    color: "white"
                }}/>
            </div>
        </header>
    );
}

export default Header;