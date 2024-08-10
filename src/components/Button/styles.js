import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '2px solid blue'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: 1s;

    &:hover{
        opacity: .7;
        background: ${props => props.theme != 'primary' ? '#c6ff56' : 'linear-gradient(180deg, #ff6378 0%, #fe7e5d 100%)'};
        color: ${props => props.theme != 'primary' ? '#3c3c3c' : '#fff'};
        transform: translateY(5px);
    }

    &:active{
        opacity: .4;
        background: ${props => props.theme != 'primary' ? '#faed27' : 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'};
    }
`