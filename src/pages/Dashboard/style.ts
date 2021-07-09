import styled from 'styled-components';
import { shade } from 'polished';

export const Tittle = styled.h1`
    color: #f54e42;
    font-size: 48px;
    max-width: 550px;
    line-height: 56px;

    margin-top: 30px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #ff1b0a;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ff4d40')};
        }
    }
`;

export const Name = styled.strong`
    color: #000000;
`;

export const Card = styled.div`
    margin-top: 40px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: #000000;

        transition: transform 0.2s;

        &:hover {
        transform: translate(10px);
        }
    
        & + a {
        margin-top: 16px;
        }

        #img-type {
            width: 200px;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;

            img {
                display: flex;
                flex-direction: column;
                width: 128px;
            }

            #types{
                margin: 0;
                display: flex;
                flex-direction: row;

                div {
                    width: 75px;
                    height: 25px;
                    
                    background: #C4C4C4;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 5%;

                    &:first-child {
                        margin-right: 5px;
                    }
                }
            }
        }
        
        #datails {
            width: 200px;
            margin-left: 16px;

            p:first-child {
                font-size: 18px;
                margin-top: 0;
                color: #525252;
            }

            p {
                color: #525252;
                margin-top: 25px;
            }
        }

        #stats{
            margin-left: 30px;
        }

        #values{
            margin-left: 30px;  
            display: flex;
            flex-direction: column;
            
            div{
                display: flex;
                flex-direction: space-between;
                margin-top: 7px;

                padding: 0px 3px;
                
                &:first-child {  margin-top: 0px; }

                span{ width: 80px; }

                p { margin-left: 10px; }
            }
        }
    }
`;

export const Hp  = styled.div` background: #FF5959; `;
export const Att = styled.div` background: #F08030; `;
export const Def = styled.div` background: #FAE078; `;
export const SpA = styled.div` background: #9DB7F5; `;
export const SpD = styled.div` background: #A7DB8D; `;
export const Spd = styled.div` background: #FA92B2; `; 