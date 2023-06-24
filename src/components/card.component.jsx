import React from "react";
const Card = ({ cardData }) => {
  return (
    <div className="cardBox">
      <h3>Registration Type: {cardData.registrationType}</h3>
      <p>Full Name: {cardData.fullName}</p>
      <p>Phone Number: {cardData.phoneNumber}</p>
      <p>Patient ID: {cardData.patientID}</p>
    </div>
  );
};

export default Card;