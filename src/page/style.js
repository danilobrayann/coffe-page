import styled from "styled-components";

export const Header = styled.header`
  padding: 0 20px;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
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
  filter: drop-shadow(6px 5px 2px rgba(0, 0, 0, 0.9));
`;

export const Paragrafo = styled.p`
  filter: drop-shadow(6px 5px 3px rgba(0, 0, 0, 0.9));
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
  filter: drop-shadow(6px 5px 2px rgba(0, 0, 0, 0.9));
  font-size: 25px;
  cursor: pointer;
  color: #ffd700;
`;

export const Main = styled.main`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 100px;
  }
`;

export const SectionLeft = styled.div`
  width: 70%;
  padding-left: 100px;

  p {
    font-size: 36px;
    margin-bottom: 80px;
    max-width: 527px;
    width: 100%;
  }

  ul {
    display: flex;
  }

  Button {
    margin-bottom: 35px;
  }

  li {
    margin-left: 20px;
    cursor: pointer;
  }

  img {
    filter: drop-shadow(2px 3px 1px rgba(0, 0, 0, 0.2));
  }

  @media screen and (max-width: 750px) {
    padding: 50px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }

    ul {
      gap: 20px;
     
    }

    li {
      margin: 0;
      margin-top:90%;
    }
  }
`;

export const SectionRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  img {
    filter: drop-shadow(7px 3px 4px rgba(0, 0, 0, 0.8));
  }

  @media screen and (max-width: 750px){
    display:none;
  }

`;
