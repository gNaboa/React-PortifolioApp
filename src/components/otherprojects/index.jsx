import React from 'react'
import {Container,SectionName,Content,Name,Video,Projetos,Triangule,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Container>
             
             <SectionName>
                <h1>Outros Projetos</h1>
            </SectionName>
    
            <Triangule/>
           
         <Content>

                <Projetos>
                    <Name>
                        <h1>Nome do projeto</h1>
                    </Name>
                    <Video/>
                </Projetos>

                <Projetos>
                    <Name>
                        <h1>Nome do projeto</h1>
                    </Name>
                    <Video/>
                </Projetos>

                <Projetos>
                    <Name>
                        <h1>Nome do projeto</h1>
                    </Name>
                    <Video/>
                </Projetos>

            </Content>  
    
            <Listras>
                    <Listra1/>
                    <Listra2/>
                </Listras>
        </Container>
    )
}
