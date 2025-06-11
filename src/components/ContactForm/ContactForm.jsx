import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useId } from 'react';

const validateForm = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validateForm}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>
        <div>
          <label className={css.label} htmlFor={`${fieldId}-number`}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={`${fieldId}-number`}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
