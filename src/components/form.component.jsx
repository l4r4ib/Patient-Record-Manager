import React from "react";
import { useState } from "react";
import Modal from "./modal.component";


const Form = () => {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };
  const [formData, setFormData] = useState({
    registrationType: "",
    fullName: "",
    phoneNumber: "",
    patientID: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    patientID: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.fullName.trim() === "") {
      newErrors.fullName = "PLEASE ENTER THE FULL NAME";
      isValid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "PLEASE ENTER A VALID PHONE NUMBER";
      isValid = false;
    }

    if (formData.patientID.trim() === "") {
      newErrors.patientID = "PLEASE ENTER A VALID IDENTITY NUMBER";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newCard = {
        registrationType: formData.registrationType,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        patientID: formData.patientID
      };
      addCard(newCard);

      setFormData({
        registrationType: "",
        fullName: "",
        phoneNumber: "",
        patientID: ""
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2 id="header">
          Lets protect yourself and those around you by vaccinating
        </h2>
        <p>I am registering for:</p>
        <label className="radioLabel">
          <input
            type="radio"
            name="registrationType"
            value="Self"
            checked={formData.registrationType === "Self"} 
            onChange={changeHandler}
          />
          My Self
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            name="registrationType"
            value="Others"
            checked={formData.registrationType === "Others"}
            onChange={changeHandler}
          />
          Other People
        </label>
        <p>Patient's Full Name:</p>
        <input
          type="text"
          name="fullName"
          placeholder={errors.fullName ? errors.fullName : "Full name"}
          value={formData.fullName}
          onChange={changeHandler}
          style={{ borderColor: errors.fullName ? "red" : null }}
        />
        <p>Mobile number:</p>
        <p id="appointmentText">
          Notifications for appointment and reminders will be sent here
        </p>
        <input
          type="tel"
          name="phoneNumber"
          placeholder={errors.phoneNumber ? errors.phoneNumber : "Phone Number"}
          value={formData.phoneNumber}
          onChange={changeHandler}
          style={{ borderColor: errors.phoneNumber ? "red" : null }}
        />
        <p>Patient ID number:</p>
        <input
          type="text"
          name="patientID"
          placeholder={errors.patientID ? errors.patientID : "Identification Number"}
          value={formData.patientID}
          onChange={changeHandler}
          style={{ borderColor: errors.patientID ? "red" : null }}
        />
        <button type="submit" id="submitbtn">
          Submit
        </button>
        <div>already registered? <Modal cards={cards} /></div>
      </form>
    </div>
  );
};

export default Form;
