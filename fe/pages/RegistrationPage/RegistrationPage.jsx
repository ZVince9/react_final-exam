import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import client, { API } from "../../shared/api/api";
import RegistrationForm from "../../components/organisms/RegistrationForm";
import {
  StyledRegistrationPageWrapper,
  StyledRegistrationContent,
  StyledMainContainer,
} from "./style";
import RegistrationContent from "../../components/organisms/RegistrationContent";
import UsersCard from "../../components/organisms/UsersCard";
import RegistrationImage from "../../components/organisms/RegistrationImage";
import {
  registrationContentArray,
  registrationSecondContentArray,
  registrationThirdContentArray,
  registrationQuestions,
  emailError,
  datePickerError,
} from "../../shared/texts/registrationContentArray";

const RegistrationPage = () => {
  const [scrollToBottom, setScrollToBottom] = useState(false);

  useEffect(() => {
    if (scrollToBottom) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom]);

  const queryClient = useQueryClient();

  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => client.get(API.backend.data),
  });

  const { mutate } = useMutation((newUser) =>
    client.post(API.backend.data, newUser)
  );

  const handleDelete = async (id) => {
    await client.delete(API.backend.data + "/" + id);
    queryClient.invalidateQueries("users");
    refetch();
  };

  const handleUpdate = async (id, updatedData) => {
    await client.put(API.backend.data + "/" + id, updatedData);
    queryClient.invalidateQueries("users");
    refetch();
  };

  const handleSubmit = (newUser) => {
    console.log(newUser);
    if (new Date(newUser.from).getTime() > new Date(newUser.till).getTime()) {
      alert(datePickerError);
      return;
    }

    const isDuplicateEmail = data.some((user) => user.email === newUser.email);

    if (isDuplicateEmail) {
      alert(emailError);
    } else {
      mutate(newUser);
      queryClient.invalidateQueries("users");

      setTimeout(() => {
        refetch();
      }, 500);

      setTimeout(() => {
        setScrollToBottom(true);
      }, 700);
    }
  };

  return (
    <StyledMainContainer>
      <StyledRegistrationPageWrapper>
        <StyledRegistrationContent>
          <RegistrationContent
            title={registrationQuestions[0]}
            content={registrationContentArray}
          />
          <RegistrationContent
            title={registrationQuestions[1]}
            content={registrationSecondContentArray}
          />
          <RegistrationContent
            title={registrationQuestions[2]}
            content={registrationThirdContentArray}
          />
          <RegistrationImage
            imageSrc={"./shared/images/gym1.jpeg"}
            imageAlt={"img"}
          />
          <RegistrationImage
            imageSrc={"./shared/images/image1.jpg"}
            imageAlt={"img"}
          />
          <RegistrationImage
            imageSrc={"./shared/images/image2.jpg"}
            imageAlt={"img"}
          />
        </StyledRegistrationContent>

        <RegistrationForm onSubmit={handleSubmit} />
        <UsersCard data={data} onDelete={handleDelete} onEdit={handleUpdate} />
      </StyledRegistrationPageWrapper>
    </StyledMainContainer>
  );
};

export default RegistrationPage;
