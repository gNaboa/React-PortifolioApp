import React from 'react'
import {Container,SectionName,Content1,Video,Descricao,Content2,Video2,Descricao2,Contents,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Container>
           
            <Contents>
                <Content1>
                    <Video/>
                    <Descricao>
                        <h1>Nome do projeto</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis,
                            lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non
                                enim praesent elementum facilisis leo, vel</p>
                    </Descricao>
                </Content1>
                <Content2>
                
                    <Descricao2>
                        <h1>Nome do projeto</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis,
                            lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non
                                enim praesent elementum facilisis leo, vel</p>
                    </Descricao2>
                    <Video2/>
                </Content2>
                
            </Contents>

            <Listras>
                    <Listra1/>
                    <Listra2/>
             </Listras>
        </Container>
    )
}

