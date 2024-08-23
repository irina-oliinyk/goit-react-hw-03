import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useId } from 'react';

export default function ContactForm({ setContact }) {
  const id = useId();
  const initialValues = {
    name: '',
    number: '',
    id,
  };
  const handleSubmit = (values, actions) => {
    setContact();
    console.log(values);
    initialValues.id = nanoid();
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.div}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={`${id}-name`}
            />
          </div>
          <div className={css.div}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id={`${id}-number`}
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
