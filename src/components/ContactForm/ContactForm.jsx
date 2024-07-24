import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
  

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
      <Form autoComplete="off">
        <label>
          Name:
          <Field
            type="text"
            name="name"
            title="Please enter your name"
            required
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number:
          <Field
            type="tel"
            name="number"
            title="Please enter your phone number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
