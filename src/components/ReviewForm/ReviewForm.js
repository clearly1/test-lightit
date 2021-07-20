import React from 'react';
import styles from './reviewFormStyles.module.sass'
import {ErrorMessage, Field, Form, Formik} from "formik";
import Rating from "@material-ui/lab/Rating";
import {createReview} from "../../api";
import PropTypes from "prop-types";

function ReviewForm(props) {

    return (
        <div>
            <Formik
                initialValues={{rate: 0, text: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.text || /^ +$/.test(values.username)) {
                        errors.text = 'Отзыв не может быть пустым';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    createReview(`/api/reviews/${props.productId}`, values).then((response) => {
                        resetForm({rate: 0, text: ''});
                        props.setNewReview(response.data);
                        setSubmitting(false);
                    });

                }}
            >
                {({setFieldValue, values, isSubmitting}) => (
                    <Form className={styles.formContainer}>
                        <div className={styles.flexColumn}>
                            <Rating
                                name="rating"
                                size="small"
                                value={values.rate}
                                onChange={(event) => {
                                    const newValue = parseInt(event.target.value);
                                    if (values.rate !== newValue) {
                                        setFieldValue("rate", newValue);
                                    } else {
                                        setFieldValue("rate", 0);
                                    }
                                }}
                            />
                            <Field as="textarea" name="text" placeholder="Ваш отзыв" maxLength={200}
                                   className={styles.textField}/>
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

ReviewForm.propTypes = {
    setNewReview: PropTypes.func
};

export default ReviewForm;