import styled ,{css}from 'styled-components';
import {Instagram,Twitter,Linkedin,Youtube,Spotify} from 'styled-icons/boxicons-logos'
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
    width:100%;
  
    position:relative;
`;

export const SectionName = styled.div`


background:#350455;
 width:30%;
top:0;
position:absolute;

>h1{

  
   
    color:white;
  
  font-size:55px;
  padding:20px;
  font-family: 'Montserrat', sans-serif;
}

`;

export const Formulario = styled.div`

    
   position:absolute;
   top:120px;
   left:100px;
   display:flex;
   flex-direction:column;
   color:red;

  


  > fieldset >div >input{

    border:1px solid black;
      background:pink;
      font-size:20px;
      margin-bottom:50px;
      background:#E5E5E5;
      height:50px;
     
 }

 >fieldset>div>textarea{


    border: 1px solid black;
    background:#E5E5E5;
    font-size:20px;
    resize:none;
 }

`;



export const Botao = styled.div`
   position:absolute;
   bottom:60px;
    right:190px;
    width:165px;
    background:#350455;
  text-align:center;
  cursor:pointer;
  :hover{

   background:#8e5ead;
  }
 >p{


    font-size:30px;
    font-family:'Montserrat', sans-serif;
    color:white;
    font-weight:900;
    padding:14px;
 }
`;

export const Info = styled.div`

  background:#350455;
  width:100%;
  height: 150px;
  position:absolute;
   top:650px;
 
 text-align:center;


`;

export const Infos = styled.div`
 
 margin-top:18px;
 position:relative;

 >h2{

color:white;
font-size:28px;
font-weight:900;
font-family: 'Montserrat', sans-serif;
}

>p{
   margin-top:10px;
   color:grey;
}

`;

const iconCss = css`

  height:24px;
  width:24px;
  fill:white;
  margin-left:6px;
  cursor:pointer;
`;

export const Icons = styled.div`
  
  margin-top:15px;
  position:absolute;
  bottom:0;
  left:590px;

`;
export const TwitterIcon = styled(Twitter)`${iconCss}`;
export const InstagramIcon = styled(Instagram)`${iconCss}`;
export const LinkedinIcon = styled(Linkedin)`${iconCss}`;
export const SpotifyIcon = styled(Spotify)`${iconCss}`;
export const YoutubeIcon = styled(Youtube)`${iconCss}`;

export const Listras = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;

    bottom:0;
    right:0;

`;

const listraCss = css`

   height:660px;
   width:30px;
   background:#350455;
   margin-right:20px;

`;

export const Listra1 = styled.div`${listraCss}`;
export const Listra2 = styled.div`${listraCss}`;