import React, { useState } from "react";
import { StyledForm, StyledP, StyledDataInputs } from "./style";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

function RegistrationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, surname, email, from, till });
    setName("");
    setSurname("");
    setEmail("");
    setFrom("");
    setTill("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledP>Registration Form</StyledP>
      <Input
        type="text"
        value={name}
        maxLength={20}
        setValue={setName}
        placeholder="Name"
        required
      />
      <Input
        type="text"
        value={surname}
        maxLength={20}
        setValue={setSurname}
        placeholder="Surname"
        required
      />
      <Input
        type="email"
        maxLength={35}
        value={email}
        setValue={setEmail}
        placeholder="Email"
        required
      />
      <StyledDataInputs
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      />
      <StyledDataInputs
        type="date"
        value={till}
        onChange={(e) => setTill(e.target.value)}
        min={from}
        required
      />
      <Button text={"Register"} type="submit" />
    </StyledForm>
  );
}

export default RegistrationForm;
