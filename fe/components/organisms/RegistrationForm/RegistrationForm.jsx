import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledForm, StyledDataPicker, StyledP } from "./style";
import Input from "../../atoms/Input";
import ICONS from "../../../shared/icons";
import Button from "../../atoms/Button";

function RegistrationForm({ onSubmit, setEditingUser }) {
  const datePickerRef = useRef(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState(null);
  const [till, setTill] = useState(null);

  const handleDateChange = (date, stateSetter) => {
    stateSetter(date);
    if (datePickerRef.current !== null) {
      datePickerRef.current.setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, surname, email, from, till });
    setName("");
    setSurname("");
    setEmail("");
    setFrom(null);
    setTill(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledP>Registration Form</StyledP>
      <Input
        type="text"
        value={name}
        maxLength={20}
        setValue={setName}
        icon={ICONS.user}
        placeholder="Name"
        required
        onChange={(e) => setEditingUser({ ...user, name: e.target.value })}
      />
      <Input
        type="text"
        value={surname}
        maxLength={20}
        setValue={setSurname}
        icon={ICONS.user}
        placeholder="Surname"
        required
        onChange={(e) => setEditingUser({ ...user, surname: e.target.value })}
      />
      <Input
        type="email"
        maxLength={35}
        value={email}
        setValue={setEmail}
        icon={ICONS.envelope}
        placeholder="Email"
        required
      />
      <StyledDataPicker>
        <DatePicker
          selected={from}
          onChange={(date) => handleDateChange(date, setFrom)}
          dateFormat="MM/dd/yyyy"
          ref={datePickerRef}
          className="custom-datepicker"
          placeholderText="From"
          required
        />
        <DatePicker
          selected={till}
          onChange={(date) => setTill(date)}
          dateFormat="dd/MM/yyyy"
          className="custom-datepicker"
          placeholderText="Till"
          minDate={from}
          required
        />
      </StyledDataPicker>
      <Button text={"Register"} type="submit" />
    </StyledForm>
  );
}

export default RegistrationForm;
