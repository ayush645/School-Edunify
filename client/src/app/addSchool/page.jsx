// @ts-nocheck
// @use:vite
"use client";

import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const AddSchool = () => {
  // React Hook Form methods and state
  const {
    register, // Register input fields
    handleSubmit, // Handle form submission
    reset, // Reset the form
    formState: { errors }, // Form validation errors
  } = useForm();

  // Form submission function
  const onSubmit = async (data) => {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    try {
      // Send a POST request to add the school
      const response = await fetch("http://localhost:3001/api/addSchool", {
        method: "POST",
        body: formData,
      });

      // Check if the request was successful
      if (response.ok) {
        // Display a success message
        alert("School added successfully");
        // Reset the form after a successful submission
        reset();
      } else {
        // Log an error message if the request fails
        console.error("Error adding school");
      }
    } catch (error) {
      // Log an error if there is an issue with the request
      console.error("Error adding school:", error);
    }
  };

  return (
    <>
      {/* Form to add a school */}
      <h1 className={styles.heading}>Add School</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* School Name */}
        <label className={styles.label}>
          Name <span>*</span>
        </label>
        <div className={styles.input}>
          <input {...register("name", { required: "Name is required" })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        {/* School Address */}
        <label className={styles.label}>
          Address <span>*</span>
        </label>
        <div className={styles.input}>
          <input
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        {/* City */}
        <label className={styles.label}>
          City <span>*</span>
        </label>
        <div className={styles.input}>
          <input {...register("city", { required: "City is required" })} />
          {errors.city && <span>{errors.city.message}</span>}
        </div>

        {/* State */}
        <label className={styles.label}>
          State <span>*</span>
        </label>
        <div className={styles.input}>
          <input {...register("state", { required: "State is required" })} />
          {errors.state && <span>{errors.state.message}</span>}
        </div>

        {/* Contact Number */}
        <label className={styles.label}>
          Contact <span>*</span>
        </label>
        <div className={styles.input}>
          <input
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Contact must only contain numbers",
              },
              minLength: {
                value: 10,
                message: "Contact must be exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Contact must be exactly 10 digits",
              },
            })}
          />
          {errors.contact && <span>{errors.contact.message}</span>}
        </div>

        {/* Email */}
        <label className={styles.label}>
          Email <span>*</span>
        </label>
        <div className={styles.input}>
          <input
            {...register("email_id", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email_id && <span>{errors.email_id.message}</span>}
        </div>

        {/* School Image */}
        <label className={styles.label}>
          Image <span>*</span>
        </label>
        <div className={styles.input}>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && <span>{errors.image.message}</span>}
        </div>

        {/* Submit button */}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddSchool;
