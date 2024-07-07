import React from 'react';
import {getLayoutBasic} from "@/common/components/Layout/Basic";
import {Container} from "@/styles/GlobalStyles/GlobalStyles";
import {Description, ModalContainer, ModalName} from "@/styles/Modal.styled";
import {Button} from "@/features/auth/Login/Login.styled";
import {useRouter} from "next/router";

const ForgotPassword = () => {
  const router = useRouter()

  return (
    <Container>
      <ModalContainer>
        <ModalName>Восстановление пароля</ModalName>
        <Description> Тут должна быть логика восстановления пароля </Description>
        <Button onClick={() => router.back()}>НАЗАД</Button>
      </ModalContainer>

    </Container>
  );
};

ForgotPassword.getLayout = getLayoutBasic
export default ForgotPassword;