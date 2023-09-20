"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

const Test = () => {
  // Define the initial form values
  const initialValues = {
    country: "", // Initial country value
  };

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here, e.g., send values to an API or perform an action
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div>
      <h2>Country Selection</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Select a Country:</label>
          <select
            id="country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            {/* Add more countries here */}
          </select>
          {formik.touched.country && formik.errors.country && (
            <div className="error">{formik.errors.country}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
