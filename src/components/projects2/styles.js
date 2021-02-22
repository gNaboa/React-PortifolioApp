import styled,{css} from 'styled-components';

export const Container = styled.div`
    
    height:100vh;
    width:100%;
    position:relative;
    margin-top:130px;
    margin-bottom:130px;
    
`;

export const Contents = styled.div`
  
    



`;


export const Content1 = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:start;
  padding:20px;
  

`;
export const Video = styled.div`
   
   height:250px;
   width:450px;
   background:gray;
   border:2px solid black;

`;
export const Descricao = styled.div`

 
   margin-left:100px;
   width:40%;
   
    >h1{
        color:black;
    }
   >p{
       margin-top:24px;
       color:black
   }


`;

export const Content2 = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:20px;
 
  

`;
export const Video2 = styled.div`
   
   height:250px;
   width:450px;
   background:gray;
   border:2px solid black;

`;
export const Descricao2 = styled.div`



   width:40%;
   margin-right:100px; 

   >h1{
       color:black;
   }

   >p{
       margin-top:24px;
       color:black;
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

  height:800px;
   width:30px;
   background:#350455;
   margin-right:20px;

`;

export const Listra1 = styled.div`${listraCss}`;
export const Listra2 = styled.div`${listraCss}`;