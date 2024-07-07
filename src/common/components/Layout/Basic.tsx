import {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'

import {BasicStyled} from './Basic.styled'
import {Header} from "@/common/components/Header/Header";

const Basic: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <BasicStyled>
      <Header/>
      {children}
    </BasicStyled>
  )
}

export const getLayoutBasic = (page: ReactElement) => {
  return <Basic>{page}</Basic>
}