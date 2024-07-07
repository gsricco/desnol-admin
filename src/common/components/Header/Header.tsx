import React, {useState} from 'react';
import {
  BurgerMenuIcon,
  HeaderContainer,
  HeaderLogo,
  ItemMenuBlock,
  NavigationStyled,
  NavLinkStyled
} from "@/common/components/Header/Header.styled";
import Link from "next/link";
import Image from 'next/image'
import {useAuth} from "@/common/hooks/useAuth";
import {Button} from "@/features/auth/Login/Login.styled";
import {Avatar} from "@/common/components/Avatar/Avatar";
import {PATH} from "@/common/constants/PATH";
import {useRouter} from "next/router";

export const Header = () => {
  const isAuth = useAuth()
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>

      <Link href={'/'}>
        <HeaderLogo>
          <Image alt={'logo'} height={30} src={'/images/logo.png'} width={30}/>
          itilium
        </HeaderLogo>
      </Link>
      {isAuth &&
          <BurgerMenuIcon onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </BurgerMenuIcon>}
      <NavigationStyled menuOpen={menuOpen}>
        {isAuth &&
            <>
                <ItemMenuBlock>
                    <NavLinkStyled href={PATH.NOTIFICATIONS}
                                   isActive={router.pathname === PATH.NOTIFICATIONS}>Уведомления</NavLinkStyled>
                    <NavLinkStyled href={PATH.REQUESTS}
                                   isActive={router.pathname === PATH.REQUESTS}>Обращения</NavLinkStyled>
                </ItemMenuBlock>
                <ItemMenuBlock>
                    <Button background={'#515a6c'}> + | НОВОЕ ОБРАЩЕНИЕ </Button>
                    <Avatar circle={true}/>
                </ItemMenuBlock>

            </>}
      </NavigationStyled>
    </HeaderContainer>
  );
};

