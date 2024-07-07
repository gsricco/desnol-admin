import React, {useState} from 'react';
import {Button} from "@/features/auth/Login/Login.styled";
import {MoreDetails} from "@/features/requests/Requests.styled";
import {RequestItemPropsType} from "@/features/requests/types";
import {Article, Description, ModalContainer, ModalName} from "@/styles/Modal.styled";
import Image from "next/image";


export const RequestItem = ({selectedRequest, setSelectedRequest}: RequestItemPropsType) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleBackToList = () => {
    setSelectedRequest(null);
  };
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <ModalContainer>
      <ModalName>Детальная информация</ModalName>
      <Description>Обращение № {selectedRequest.number} от {selectedRequest.create}</Description>
      <Article> Тема: {selectedRequest.title} </Article>
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        {selectedRequest.awaiting_response &&
            <Description><Image alt={'attention'} src={'/icon/exclamation.svg'} width={20} height={20}/> Ожидает
                ответа <Image alt={'attention'} src={'/icon/exclamation.svg'} width={20} height={20}/></Description>
        }
      </div>
      <Description> Описание: {selectedRequest.description || 'Отсутствует описание.'}</Description>
      <Description>Краиний срок: {selectedRequest.deadline}</Description>
      <Description>Состояние: {selectedRequest.status}</Description>
      <Description>Решение: {selectedRequest.resolution || 'Отсутствует описание.'}</Description>
      <div>
        <button onClick={toggleDetails} style={{border: 'none', background: 'transparent'}}>
          {showDetails ? '⬆️ Скрыть...' : '⬇️ Подробнее...'}
        </button>
        {showDetails && (
          <>
            <MoreDetails>
              <Article>Дополнительная информация</Article>
              <Description> Услуга: {selectedRequest.service || 'Отсутствует описание.'}</Description>
              <Description> Состав
                услуги: {selectedRequest.service_composition || 'Отсутствует описание.'}</Description>
              <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                {selectedRequest.awaiting_response &&
                    <Description><Image alt={'attention'} src={'/icon/exclamation.svg'} width={20} height={20}/> Ожидает
                        ответа <Image alt={'attention'} src={'/icon/exclamation.svg'} width={20}
                                      height={20}/></Description>
                }
              </div>

            </MoreDetails>
            <Description>Если остались вопросы, пожайлуста создайте новое обращение</Description>
          </>
        )}
      </div>
      <Button onClick={handleBackToList}>НАЗАД</Button>
    </ModalContainer>

  );
};

