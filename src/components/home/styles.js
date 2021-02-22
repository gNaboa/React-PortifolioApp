import styled,{css} from 'styled-components';
import {Headphone,Music,Calendar} from 'styled-icons/boxicons-regular'
import { Music2 } from 'styled-icons/remix-fill';


export const Container = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  background:#350455;
  
 
`;
export const Banner = styled.div`
  
  width:100%;
  height:200px;
  background:url('https://i.pinimg.com/originals/38/da/ba/38daba6f667c7bf5c8adb8e5e491ed19.jpg') ;
   text-align:center;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:50% 50%;

  >h1{
    margin-top:50px;
    font-family:'Montserrat', sans-serif;
    font-size:90px;
    color:white;
  }

  `;
const IconCss=css`

width:44px;
height:44px;
fill:black;
`;
export const Profile = styled.div`
  
  display:flex;
  flex-direction:column;
  padding:20px;
  margin-top:100px;
  

>span,strong{
  font-size:30px;
  margin-bottom:50px;
  color:black;
}
`;
export const SongIcon = styled(Music)`${IconCss}`;
export const HeadIcon = styled(Headphone)`${IconCss}`;
export const CalendarIcon = styled(Calendar)`${IconCss}`;
export const Content = styled.div`
    display:flex;
    flex-direction:row;
    clip-path: polygon(0 2%, 100% 38%, 100% 100%, 0 100%);
    position:relative;
    background:white;
    height:500px;
     width:100%;
     margin-top:50px;
  
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