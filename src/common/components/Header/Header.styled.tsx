import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  gap: 20px;
  box-shadow: 2px 5px 5px lightgrey;
  z-index: 1000;

  width: 100%;
  padding: 10px 50px;

  @media (max-width: 1400px) {
    justify-content: center;
    padding: 2px;
    gap: 20px;
  }
`
export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #6fb543;
  font-size: 25px;
  font-weight: 700;
`

export const NavigationStyled = styled.nav<{menuOpen:boolean}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 200px;

  @media (max-width: 877px) {
    gap: 10px;

    & button,
    a {
      width: 100%;
    }
  }
  
  @media (max-width: 560px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    background-color: #6fb543;
    width: 90vw;
    padding: 10px;
  }

`

export const ItemMenuBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 560px) {
    flex-direction: column;
    gap:2px;

  }
  
`
export const NavLinkStyled = styled(Link)<{ isActive: boolean }>`
  color: ${props => (props.isActive ? '#1a73e8' : 'black')};
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    color: #5594e7;
    text-decoration: none;
  }

  @media (max-width: 560px) {
    margin: 10px 0;

  }
`;

export const BurgerMenuIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: #6fb543;

  @media (max-width: 560px) {
    display: block;
  }
`;