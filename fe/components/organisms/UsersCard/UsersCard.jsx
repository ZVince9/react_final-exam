import React, { useState } from "react";
import {
  StyledCardContainer,
  StyledCard,
  StyledCardBody,
  StyledUserCardText,
} from "./style";
import Button from "../../atoms/Button/Button";
import EditUserCard from "../../organisms/EditUserCard";

const UsersCard = ({ data, onDelete, onEdit }) => {
  const [isDeleting, setIsDeleting] = useState("");
  const [editedUserId, setEditedUserId] = useState(null);

  const handleDelete = (id, index) => {
    const newDeletingState = [...isDeleting];
    newDeletingState[index] = !newDeletingState[index];
    setIsDeleting(newDeletingState);

    if (newDeletingState[index]) {
      return;
    }
    onDelete(id);
  };

  const handleEdit = (id) => {
    setEditedUserId(id);
    onEdit(id);
  };

  const handleCancel = () => {
    setEditedUserId(null);
  };

  const handleUpdate = (id, data) => {
    setEditedUserId(null);
    return onEdit(id, data);
  };

  return (
    <div>
      {data && data.length > 0 && (
        <StyledUserCardText>Registered Users</StyledUserCardText>
      )}
      <StyledCardContainer>
        {data &&
          data.map((user, index) => (
            <StyledCard key={user._id}>
              <StyledCardBody>
                <>
                  <h1>{user.name}</h1>
                  <h1>{user.surname}</h1>
                  <p>
                    <span>Email: </span> {user.email}
                  </p>
                  <p>
                    <span>From: </span>{" "}
                    {new Date(user.from).toLocaleDateString("lt-LT")}
                  </p>
                  <p>
                    <span>Till: </span>{" "}
                    {new Date(user.till).toLocaleDateString("lt-LT")}
                  </p>
                  {editedUserId === user._id ? (
                    <>
                      <Button
                        text={"Cancel"}
                        type="submit"
                        action={() => handleCancel(user._id)}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text={"Edit"}
                        type="submit"
                        action={() => handleEdit(user._id)}
                      />
                      <Button
                        text={isDeleting[index] ? "Confirm" : "Delete"}
                        type="submit"
                        action={() => handleDelete(user._id, index)}
                      />
                    </>
                  )}
                </>
              </StyledCardBody>
              {editedUserId && user._id === editedUserId && (
                <EditUserCard
                  data={data}
                  user={user}
                  onSubmit={(editedData) => handleUpdate(user._id, editedData)}
                />
              )}
            </StyledCard>
          ))}
      </StyledCardContainer>
    </div>
  );
};

export default UsersCard;
