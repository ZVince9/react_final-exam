import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledForm, StyledDataPicker, StyledP } from "./style";
import Input from "../../atoms/Input";
import ICONS from "../../../shared/icons";
import Button from "../../atoms/Button";
import {
  emailError,
  datePickerError,
} from "../../../shared/texts/registrationContentArray";

function EditUserCard({ data, onSubmit, user }) {
  const datePickerRef = useRef(null);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [from, setFrom] = useState(user.from);
  const [till, setTill] = useState(user.till);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = data.filter((user) => user.email === email)[0];

    if (existingUser && existingUser.email !== user.email) {
      alert(emailError);
      return;
    }

    if (new Date(from).getTime() > new Date(till).getTime()) {
      alert(datePickerError);
      return;
    }

    onSubmit({ name, surname, email, from, till });
    setName("");
    setEmail("");
    setFrom(null);
    setTill(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledP>Update your User</StyledP>
      <Input
        type="text"
        value={name}
        setValue={setName}
        icon={ICONS.user}
        placeholder="Name"
        required
      />
      <Input
        type="text"
        value={surname}
        setValue={setSurname}
        icon={ICONS.user}
        placeholder="Surname"
        required
      />
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        icon={ICONS.envelope}
        placeholder="Email"
        required
      />
      <StyledDataPicker>
        <DatePicker
          selected={new Date(from)}
          onChange={(date) => setFrom(date)}
          dateFormat="dd/MM/yyyy"
          ref={datePickerRef}
          className="custom-datepicker"
          placeholderText="From"
          required
        />
        <DatePicker
          selected={new Date(till)}
          onChange={(date) => setTill(date)}
          dateFormat="dd/MM/yyyy"
          className="custom-datepicker"
          placeholderText="Till"
          minDate={new Date(from)}
          required
        />
      </StyledDataPicker>
      <Button text={"Save"} type="submit" width={"100%"} />
    </StyledForm>
  );
}

export default EditUserCard;
