import {getLayoutBasic} from "@/common/components/Layout/Basic";
import {Container} from "@/styles/GlobalStyles/GlobalStyles";
import Link from "next/link";
import {PATH} from "@/common/constants/PATH";
import React from "react";
import {useRouter} from "next/router";
import {setItem} from "@/common/hooks/useLocalStorage";
import {
  Button,
  ButtonBlock,
  Checkbox,
  CheckboxContainer,
  ForgotPasswordLink,
  Form,
  Input, StyledShowBlock, StyledShowPasswordBtn, Title
} from "@/features/auth/Login/Login.styled";
import {useShowPassword} from "@/common/hooks/useShowPassword";
import hidePasswordBtn from '@/public/icon/eye-outline.svg'
import showPasswordBtn from '@/public/icon/eye-off-outline.svg'



const Login = () => {
  const router = useRouter()
  const { passwordType, showPassword } = useShowPassword()
  const loginHandler = ()=>{
    setItem('accessToken', 'desnol')
    router.push(PATH.HOME)
  }

  return (
    <Container>
        <Form>
          <Title>Вход в сервис</Title>
          <Input type="text" placeholder="Логин" required value={'test'} />
          <StyledShowBlock>
            <Input type={passwordType === 'password'? 'password':'text'} placeholder="Пароль" required value={'admin'} />
            <StyledShowPasswordBtn
              alt="show password"
              src={passwordType === 'password' ? showPasswordBtn : hidePasswordBtn}
              onClick={() => showPassword()}
            />
          </StyledShowBlock>
          <CheckboxContainer>
            <Checkbox type="checkbox" id="remember" />
            <label htmlFor="remember">Запомнить меня</label>
          </CheckboxContainer>
          <ButtonBlock>
            <Button type="button" onClick={loginHandler} >ВОЙТИ</Button>
            <Link href={PATH.FORGOT_PASSWORD} passHref>
              <ForgotPasswordLink>ЗАБЫЛИ ПАРОЛЬ?</ForgotPasswordLink>
            </Link>
          </ButtonBlock>
        </Form>
      </Container>
    )
}

Login.getLayout = getLayoutBasic
export default Login