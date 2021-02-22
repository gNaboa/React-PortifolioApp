import styled,{createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

   *{
       margin:0;
    
       
   }


    html,body,#root{
           max-height:100vh;
           max-width:100vw ;
           height:100%;
           width:100%;
    }

    *,button,input{
        font-family:-apple-system;
        border:0;
        background:none;
    }


`;