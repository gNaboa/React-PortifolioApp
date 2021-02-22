import styled from 'styled-components';

export const Container = styled.div`
    position:sticky;
    top:0;
    z-index:2;
      width:100%;
    height:45px;
    background:#350455;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
   
`;

export const Button = styled.div`
  
  cursor: pointer;
   color:white;
  margin-top:13px;
  margin-left:15px;
  margin-right:15px;
  margin-bottom:5px;
  border-bottom:solid 1px transparent;
  :hover{
      border-bottom:solid 1px white;
      transition:all 0.2s linear;
  }
  >p{
      font-size:20px;
  }

  
 
`;
