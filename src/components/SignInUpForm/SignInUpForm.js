import React from 'react';
import styles from './signInUpFormStyles.module.sass'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {
    changeIsSignIn,
    changeSignInUpFormIsOpen,
    selectSignInUpForm
} from "../../features/signInUpForm/signInUpFormSlice";
import {authentication} from "../../api";


function SignInUpForm(props) {

    const signInUpForm = useSelector(selectSignInUpForm);
    const dispatch = useDispatch();

    return (
        <div className={styles.backgroundApp}>
            <div className={styles.clickableFreeArea} onClick={() => {
                dispatch(changeSignInUpFormIsOpen())
            }}/>
            <Formik
                initialValues={{username: '', password: '', confirmPassword: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Имя пользователя это обязательное поле';
                    } else if (!/^(?=.{8,20}$)[a-zA-Z0-9]+$/.test(values.username)) {
                        errors.username = 'Имя пользователя должно содержать только буквы и цифры от 8 до 20 символов';
                    }
                    if (!values.password) {
                        errors.password = 'Пароль это обязательное поле';
                    } else if (/[!@#$%^&*()_+=/\\\-|\s]/.test(values.password)) {
                        errors.password = 'Спецсимволы недупистимы в пароле';
                    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
                        errors.password = 'Пароль должен содержать не менее 8 символов, включая цифру и букву';
                    }
                    if (!signInUpForm.isSignIn) {
                        if (!values.confirmPassword) {
                            errors.confirmPassword = 'Повторить пароль это обязательное поле';
                        } else if (values.password !== values.confirmPassword) {
                            errors.confirmPassword = 'Пароли не совпадают';
                        }
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(true);
                    let url = 'api/login/';
                    if (!signInUpForm.isSignIn) {
                        url = '/api/register/'
                    }
                    authentication(url, values).then(response => {

                        if(response.data.success === true){
                            console.log(response.data.token);

                        }else{
                            console.log(response.data.message);

                        }

                        setSubmitting(false);
                    })

                }}
            >
                {({isSubmitting}) => (
                    <Form className={styles.signInUpForm}>
                        <div className={styles.formNav}>
                            <input id="signIn" type="radio" name="isSignInForm" checked={signInUpForm.isSignIn}
                                   onChange={() => {
                                       dispatch(changeIsSignIn(true))
                                   }}/>
                            <label htmlFor="signIn">Вход</label>
                            <span/>
                            <input id="signUp" type="radio" name="isSignInForm" checked={!signInUpForm.isSignIn}
                                   onChange={() => {
                                       dispatch(changeIsSignIn(false))
                                   }}/>
                            <label htmlFor="signUp">Регистрация</label>
                        </div>
                        <Field type="text" name="username" placeholder="Имя пользователя"/>
                        <ErrorMessage name="username">{msg => <div
                            className={styles.errorContainer}>{msg}</div>}</ErrorMessage>
                        <Field type="password" name="password" placeholder="Пароль"/>
                        <ErrorMessage name="password">{msg => <div
                            className={styles.errorContainer}>{msg}</div>}</ErrorMessage>
                        {
                            !signInUpForm.isSignIn &&
                            <>
                                <Field type="password" name="confirmPassword" placeholder="Повторить пароль"/>
                                <ErrorMessage name="confirmPassword">{msg => <div
                                    className={styles.errorContainer}>{msg}</div>}</ErrorMessage>
                            </>
                        }
                        {
                            signInUpForm.isSignIn ?
                                <button type="submit" disabled={isSubmitting}>Войти</button>
                                :
                                <button type="submit" disabled={isSubmitting}>Зарегистрироваться</button>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignInUpForm;