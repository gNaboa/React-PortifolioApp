import React from 'react'
import {Container,SectionName,Formulario,Icons,Botao,Info,Infos,SpotifyIcon,YoutubeIcon,
        TwitterIcon,InstagramIcon,LinkedinIcon,Listras,Listra1,Listra2} from './styles.js'
export default function index() {
    return (
        <Container>
            <SectionName>
                <h1>Contato</h1>
            </SectionName>

            <Formulario>
               
                            

                    <fieldset class="grupo">
                    
                            <div class="campo">
                          
                                <input type="text" name="nome" id="nome" size="100" required placeholder="Seu nome"/>
                            </div>

                        
                            <div class="campo">
                              
                                <input type="text" name="sobrenome" id="sobrenome" required size="100" placeholder="Seu email"/>
                            </div>
                            <div class="campo">
                             
                                <textarea name="" id="" cols="103" rows="7" placeholder="Sua mensagem" ></textarea>
                            </div>
                        </fieldset>  

                 </Formulario>

                 <Botao>
                     <p>Enviar</p>
                    
                 </Botao>
         
                 <Info>
                     <Infos>
                         <h2>Bitdreamer Sound Design</h2>
                         <p>loremipsun@email.com</p>
                     </Infos>
                     <Icons>
                          <TwitterIcon/>
                          <InstagramIcon/>
                          <LinkedinIcon/>
                          <SpotifyIcon/>
                          <YoutubeIcon/>
                     </Icons>
                 </Info>

                 <Listras>
                    <Listra1/>
                    <Listra2/>
                </Listras>
        </Container>
    )
}
