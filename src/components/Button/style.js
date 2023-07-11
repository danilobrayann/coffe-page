import { styled } from "styled-components";

export const MainButton = styled.button`
    background: #FCA60F;
    border: none;
    color: #FFF;
    width: 290px;
    height: 58px;
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
    transition: all .2s;
    text-shadow: 1px 1px 8px rgba(0, 0, 0, .9);
    filter: drop-shadow(1px 1px 8px rgba(0, 0, 0, .9));

    &:hover {
        background: #F1890b;
    }
`;
