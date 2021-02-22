import React from 'react'
import {Container,First,Second,Photo,Description,Content,SectionName,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Container>
     
           <First/>
           <SectionName>
                <h1><u>Sobre Mim</u></h1>
            </SectionName>
            <Content>
  
                    <Photo/>
                <Description>

                <p>Sou ruim no lol,Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis, lectus magna fringilla urna,
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
                </Description>

            </Content>
            <Listras>
                    <Listra1/>
                    <Listra2/>
                </Listras>
          
        </Container>
    )
}
