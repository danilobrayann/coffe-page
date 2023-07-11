import React from "react";
import { Header,DivImg,ImgLogo,Paragrafo,NavBar,Lista,LinhaLista  } from "./style"
import Logo from"../assets/graos.png"


function Home() {

    return (
        <Header>
            <DivImg>
                <ImgLogo src={Logo} alt="logo do Coffee" />
                <Paragrafo>Get.Coffee</Paragrafo>
            </DivImg>
            <NavBar>
                <Lista >
                    <LinhaLista>Menu</LinhaLista>
                    <LinhaLista>Contac</LinhaLista>
                    <LinhaLista>Fid Us</LinhaLista>
                </Lista >
            </NavBar>
        </Header>

    )

}


export default Home 