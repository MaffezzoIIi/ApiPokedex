
// interface FormProps {
//     hasError: boolean;
// }


// export const Tittle = styled.h1`
//     color: #f54e42;
//     font-size: 48px;
//     max-width: 550px;
//     line-height: 56px;

//     margin-top: 30px;
// `;

// export const Form = styled.form<FormProps>`
//     margin-top: 40px;
//     max-width: 700px;

//     display: flex;

//     input {
//         flex: 1;
//         height: 70px;
//         padding: 0 24px;
//         border: 0;
//         border-radius: 5px 0 0 5px;
//         color: #3a3a3a;

//         border: 2px solid #fff;
//         border-right: 0;

//         ${props => props.hasError && css`
//             border-color: #c53030;  
//         `}


//         &::placeholder {
//             color: #a8a8b3;
//         }
//     }

//     button {
//         width: 210px;
//         height: 70px;
//         background: #ff1b0a;
//         border-radius: 0 5px 5px 0;
//         border: 0;
//         color: #fff;
//         font-weight: bold;

//         transition: background-color 0.2s;

//         &:hover {
//             background: ${shade(0.2, '#ff4d40')};
//         }
//     }
// `;

// export const Error = styled.span`
//     display: block;
//     color: #c53030;
//     margin-top: 8px;
// `;

// export const Name = styled.strong`
//     color: #000000;
// `;

// export const Card = styled.div`
//     margin-top: 40px;
//     max-width: 700px;

//     a {

//         border-radius: 5px;
//         width: 100%;
//         padding: 12px;
//         display: flex;
//         flex-direction: row;
//         text-decoration: none;
//         color: #000000;

//         transition: transform 0.2s;

//         &:hover {
//         transform: translate(10px);
//         }
    
//         & + a {
//         margin-top: 16px;
//         }

//         #img-type {
//             width: 200px;
//             display: flex;
//             flex-direction: column;

//             justify-content: center;
//             align-items: center;

//             img {
//                 display: flex;
//                 flex-direction: column;
//                 width: 128px;
//             }

//             #types{
//                 margin: 0;
//                 margin-top: 5px;
//                 display: flex;
//                 flex-direction: row;
         
//                 div {
//                     width: 75px;
//                     height: 25px;

//                     box-shadow: 3px 5px 5px rgb(0, 0, 0, 0.45);

//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     border-radius: 5%;

//                     &:first-child {
//                         margin-right: 10px;
//                     }
//                 }
//             }
//         }
        
//         #datails {
//             width: 180px;
//             margin-left: 16px;

//             p:first-child {
//                 font-size: 18px;
//                 margin-top: 0;
//                 color: #525252;
//             }

//             p {
//                 color: #525252;
//                 margin-top: 25px;
//             }
//         }

//         #stats{
//             margin-left: 10px;
//         }

//         #values{
//             margin-left: 30px;  
//             display: flex;
//             flex-direction: column;
            
//             div{
//                 width: 150px;
//                 display: flex;
//                 flex-direction: space-between;
//                 margin-top: 7px;

//                 padding: 0px 3px;
                
//                 &:first-child {  margin-top: 0px; }

//                 span{ width: 150px; min-width: 80px;}
//             }
//         }
//     }
// `;

// export const Hp = styled.div` 
//     background: #FF5959;   
//     p { margin-left: 80px; }
// `;
// export const Att = styled.div` background: #F08030; p { margin-left: 80px; }`;
// export const Def = styled.div` background: #FAE078; p { margin-left: 80px; }`;
// export const SpA = styled.div` background: #9DB7F5; p { margin-left: 80px; }`;
// export const SpD = styled.div` background: #A7DB8D; p { margin-left: 80px; }`;
// export const Spd = styled.div` background: #FA92B2; p { margin-left: 80px; }`;

