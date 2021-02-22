import styled,{css} from 'styled-components';

export const Container = styled.div`
  
    
   height:100vh;
   width:100%;
   margin-top:5px;
   position:relative;
   background:white;
`;

export const Triangule = styled.div`

   
width: 0;
height: 0;
border-style: solid;
border-width: 600px 0 0 98.5vw;
border-color: transparent transparent transparent #350455;
position:absolute;
bottom:0;
`;

export const SectionName = styled.div`


background:#350455;
 width:50%;


>h1{

  
   
    color:white;

  font-size:55px;
  padding:20px;
  font-family: 'Montserrat', sans-serif;
}


`;



export const Content = styled.div`
   display:flex;
   flex-direction:row;
   position:absolute;
    right:150px;
   top:180px;
   
   
`;

export const Projetos = styled.div`
  margin-left:70px;

`;
export const Name = styled.div`
  width:340px;
  height:55px;
  background: gray;
  color:white;
  border-top:2px solid black;
  border-right:2px solid black;
 border-left:2px solid black;
`;
export const Video = styled.div`

 width:340px;
 height:400px;
 background:#C4C4C4;
 border-bottom:2px solid black;
 border-right:2px solid black;
 border-left:2px solid black;

`;

export const Listras = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;

    bottom:0;
    right:0;

`;

const listraCss = css`

   height:800px;
   width:30px;
   background:#350455;
   margin-right:20px;

`;

export const Listra1 = styled.div`${listraCss}`;
export const Listra2 = styled.div`${listraCss}`;

