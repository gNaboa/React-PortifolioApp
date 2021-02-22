import styled ,{css}from 'styled-components';
 

export const Container = styled.div`
width: 0;
height: 0;
border-style: solid;
border-width: 70vh 98.7vw 0 0;
border-color: #350455 transparent transparent transparent;
background:transparent;
display:inline-block;

justify-content:center;
position:relative;


`;

export const Master = styled.div`
 position:relative;
text-align:center;
>h1{
  color:white;
  position:absolute;
  font-size:55px;
  padding:20px;
  font-family: 'Montserrat', sans-serif;
  top:0;
}

`;

export const Content = styled.div`

  position:absolute;
  top:130px;
  left:300px;

>p{
  color:black;
  font-size:20px;
  margin-top:20px;
}
`;

export const Song = styled.div`


   width:800px;
   height:450px;
   background:gray;
   border:2px solid black;
  
`;

export const Rectangle = styled.div`

    width:100%;
    height:30vh;
    background:#350455;
`;

export const Listras = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;

    bottom:0;
    right:0;

`;

const listraCss = css`

   height:550px;
   width:30px;
   background:#350455;
   margin-right:20px;

`;

export const Listra1 = styled.div`${listraCss}`;
export const Listra2 = styled.div`${listraCss}`;