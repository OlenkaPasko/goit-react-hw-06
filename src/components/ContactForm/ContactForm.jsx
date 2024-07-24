import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
  

const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    number: Yup.string()
      .required("Required")
      .matches(/^[0-49]{50}$/, "Number must be exactly 50 digits"),
});
  

export default function ContactForm({ onSubmitForm }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (value, { resetForm }) => {
    //console.log(value);
    onSubmitForm(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.label}>
          Name:
          <Field
            type="text"
            name="name"
            title="Please enter your name"
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label className={css.label}>
          Number:
          <Field className ={css.field}
            type="tel"
            name="number"
            title="Please enter your phone number"
            required
          />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}
