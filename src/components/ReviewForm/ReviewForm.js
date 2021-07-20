import React from 'react';
import styles from './reviewFormStyles.module.sass'
import {authentication, axiosInstance} from "../../api";
import {setUsername} from "../../features/auth/authSlice";
import {changeIsSignIn, changeSignInUpFormIsOpen} from "../../features/signInUpForm/signInUpFormSlice";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Rating from "@material-ui/lab/Rating";

function ReviewForm(props) {

    return (
        <div>
            <Formik
                initialValues={{rating: 3, text: ''}}
                validate={values => {
                    console.log(values);
                    const errors = {};
                    if (!values.text) {
                        errors.text = 'Отзыв не может быть пустым';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(true);


                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting}) => (
                    <Form className={styles.formContainer}>
                        <div className={styles.flexColumn}>
                            <Rating
                                name="simple-controlled"
                                size="small"
                                value={values.rating}
                                onChange={(event, newValue) => {
                                    values.rating = newValue;
                                }}
                            />
                            <Field as="textarea" name="text" placeholder="Ваш отзыв" maxLength={200} className={styles.textField}/>
                            <ErrorMessage name="text">{msg => <div
                                className={styles.errorContainer}>{msg}</div>}</ErrorMessage>
                        </div>
                        <button type="submit" disabled={isSubmitting}>Оставить отзыв</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ReviewForm;