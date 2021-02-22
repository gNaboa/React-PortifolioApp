import styled,{css} from 'styled-components';
import Image from '../../Retrato-Wesley-Web.png'

export const Container = styled.div`
   width:100%;
   height: 100vh;
   background:pink;
   display:flex;
   position:relative;
   background:#350455;
   align-items:center;
`;

export const First = styled.div`


width: 0;
height: 0;
border-style: solid;
border-width: 325px 762.9px 325px 0;
border-color: transparent white transparent transparent;
position:absolute;
right:0;
`;


export const Content = styled.div`
   background:#E5E5E5;
   border:1px solid black;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
  position: absolute;
 
  left:130px;
  top:150px;
  
  

`;

export const Photo = styled.div`
height:350px;
width:350px;
background:url(${Image});
background-size:cover;
border:1px solid black;


`;

export const Description = styled.div`



    width:700px;
    padding:14px;
    >p{

font-size:24px;
font-family: 'Montserrat', sans-serif;
color:black;
}
    
`;

export const SectionName = styled.div`


background:#350455;
 width:50%;
top:0;
position:absolute;

>h1{

  
   
    color:white;
  
  font-size:55px;
  padding:20px;
  font-family: 'Montserrat', sans-serif;
}


`;


export const Listras = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;

    bottom:0;
    right:0;

`;

const listraCss = css`

   height:650px;
   width:30px;
   background:#350455;
   margin-right:20px;

`;

export const Listra1 = styled.div`${listraCss}`;
export const Listra2 = styled.div`${listraCss}`;