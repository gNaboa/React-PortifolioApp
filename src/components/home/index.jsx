import React from 'react'
import {Content,Container,Banner,SongIcon,HeadIcon,CalendarIcon,Profile,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Container>
           <Banner>
                <h1>BitDreamer Sound Design</h1>
            </Banner>

            <Content>
           
                <Profile>
                    
                    <span><SongIcon/><strong>   38</strong> Músicas desenvolvidas</span>
                        <span><HeadIcon/>   Participações em <strong>11 </strong>projetos</span>
                        <span> <CalendarIcon/>   Desde<strong> 1867</strong></span>
                </Profile>
                <Listras>
                    <Listra1/>
                    <Listra2/>
                </Listras>
               
            </Content>
           
            
            
       </Container>
    )
}
