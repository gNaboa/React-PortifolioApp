import React from 'react'
import {Container,Master,Song,Content,Rectangle,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Master>

            <Rectangle/>
            <Container>
             
            
            </Container>
            <h1>Músicas Principais</h1>
            <Content>
                 <Song/>
                 <p>Essa música é muito legal ouve ai boy</p>
          
            </Content>
            <Listras>
                    <Listra1/>
                    <Listra2/>
             </Listras>
     </Master>
    )   
}
