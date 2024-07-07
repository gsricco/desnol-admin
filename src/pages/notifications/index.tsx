import {useRouter} from "next/router";
import {Container} from "@/styles/GlobalStyles/GlobalStyles";
import {Button} from "@/features/auth/Login/Login.styled";
import {getLayoutBasic} from "@/common/components/Layout/Basic";
import React from "react";
import {Description, ModalContainer, ModalName} from "@/styles/Modal.styled";

const Notifications = () => {

  const router = useRouter()

  return (
    <Container>
      <ModalContainer>
        <ModalName>Уведомления</ModalName>
        <Description> Тут должна быть логика просмотра уведомлений</Description>
        <Button onClick={()=>router.back()}>НАЗАД</Button>
      </ModalContainer>

    </Container>
  )
}

Notifications.getLayout = getLayoutBasic
export default Notifications