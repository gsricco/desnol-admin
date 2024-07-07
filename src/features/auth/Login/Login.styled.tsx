import styled from "styled-components";
import {ButtonPropsType} from "@/features/auth/Login/types";
import Image from 'next/image'


export const Form = styled.form`
  position: fixed;
  min-width: 290px;
  width: 600px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation-name: rotate;
  animation-duration: 0.9s;

  @keyframes rotate {
    0% {
      transform: perspective(600px) translate(-50%, -50%) rotateY(-180deg);
    }
    100% {
      transform: perspective(600px) translate(-50%, -50%) rotateY(0);
    }
  }  
  
  & h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
  
`;

export const Title = styled.h1``
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Button = styled.button<ButtonPropsType>`
  background-color:${props=>(props.background? props.background :'#1a73e8')};
  color: white;
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: ${props=>(props.width? props.width:'')};
  font-size: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const ForgotPasswordLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2rem;
`;

export const StyledShowBlock = styled.div`
position: relative;
`
export const StyledShowPasswordBtn = styled(Image)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`