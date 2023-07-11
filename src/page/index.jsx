import React from "react";
import {
  Header,
  DivImg,
  ImgLogo,
  Paragrafo,
  NavBar,
  Lista,
  LinhaLista,
  Main,
  SectionLeft,
  SectionRight
} from "./style";
import Button from "../components/Button";
import Logo from "../assets/graos.png";
import LogoInstagram from "../assets/insta.svg";
import LogoLinkedIn from "../assets/in.svg";
import LogoTwitter from "../assets/twitter.svg";
import ImgCOffe from"../assets/copo.png"
function Home() {
  return (
    <>
      <Header>
        <DivImg>
          <ImgLogo src={Logo} alt="logo do Coffee" />
          <Paragrafo>Get.Coffee</Paragrafo>
        </DivImg>
        <NavBar>
          <Lista>
            <LinhaLista>Menu</LinhaLista>
            <LinhaLista>Contact</LinhaLista>
            <LinhaLista>Find Us</LinhaLista>
          </Lista>
        </NavBar>
      </Header>
      <Main>
        <SectionLeft>
          <p>The best way to get your coffee without leaving the comfort of your house</p>
          <Button>Make your order</Button>
          <ul>
            <li><img src={LogoInstagram} alt="Instagram" /></li>
            <li><img src={LogoLinkedIn} alt="LinkedIn" /></li>
            <li><img src={LogoTwitter} alt="Twitter" /></li>
          </ul>
        </SectionLeft>
        <SectionRight>
            <p><img src={ImgCOffe} alt="" /></p>
        </SectionRight>
      </Main>
    </>
  );
}

export default Home;
