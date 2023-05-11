import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledForm, StyledDataInputs, StyledP } from "./style";
import Input from "../../atoms/Input";
import ICONS from "../../../shared/icons";
import Button from "../../atoms/Button";
import {
  emailError,
  datePickerError,
} from "../../../shared/texts/registrationContentArray";

function EditUserCard({ data, user, onSubmit }) {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [from, setFrom] = useState(user.from.split("T")[0]);
  const [till, setTill] = useState(user.till.split("T")[0]);

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
    setFrom("");
    setTill("");
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
        marginLeft={"8px"}
      />
      <Input
        type="text"
        value={surname}
        setValue={setSurname}
        icon={ICONS.user}
        placeholder="Surname"
        marginLeft={"8px"}
        required
      />
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        icon={ICONS.envelope}
        placeholder="Email"
        marginLeft={"8px"}
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
      <Button text={"Save"} type="submit" width={"100%"} />
    </StyledForm>
  );
}

export default EditUserCard;
