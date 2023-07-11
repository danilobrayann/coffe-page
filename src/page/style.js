import styled from "styled-components";

export const Header = styled.header`
  padding: 0 20px;
  height: 126px; 
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #1c1c1c;
  
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  
`;

export const ImgLogo = styled.img`
  filter: drop-shadow(6px 5px 2px rgba(0, 0, 0, .9));
`;

export const Paragrafo = styled.p`
  filter: drop-shadow(6px 5px 3px rgba(0, 0, 0, .9));
  font-size: 30px;
  font-weight: bold;
  color: #ffd700;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;
export const Lista = styled.ul`
  display: flex;
  gap: 22px;
  list-style: none;
`;
export const LinhaLista = styled.li`
  filter: drop-shadow(6px 5px 2px rgba(0, 0, 0, .9));
  font-size: 25px;
  cursor: pointer;
  color: #ffd700;
`;
