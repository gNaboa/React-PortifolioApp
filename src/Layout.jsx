import React from 'react'
import Header from './components/header/index'
import Home from './components/home/index'
import Songs from './components/songs/index'
import Project from './components/projects/index'
import Project2 from './components/projects2/index'
import OtherProjects from './components/otherprojects/index'
import About from './components/about/index'
import Contato from './components/Contato/index'
import {Container,Tracos} from './Layout.js'
export default function Layout() {
    return (
        
    <Container>
            <Header/>
            <Home/>
            <Songs/>
            <Project/>
            <Project2/>
            <OtherProjects/>
            <About/>
            <Contato/>
            
    </Container>
    )
}
