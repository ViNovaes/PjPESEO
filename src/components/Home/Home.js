import React from 'react';
import './home.css'
import imgG1 from '../../img/homeimg/HomeMulher.png'
import imgG2 from '../../img/homeimg/home1.png'
import imgG3 from '../../img/homeimg/home8.png'
import imgG4 from '../../img/homeimg/home7.png'
import imgG5 from '../../img/homeimg/home6.png'
import playStore from '../../img/homeimg/playStore.png'
import appleStore from '../../img/homeimg/appleStore.png'
import imgG6p1 from '../../img/homeimg/home5.png'
import imgG6p2 from '../../img/homeimg/home4.png'
import imgG6p3 from '../../img/homeimg/home3.png'
import imgG7 from '../../img/homeimg/home2.png'
import { Container } from 'react-bootstrap';

function Home() {
    return(
        <main>
            <Container>
                <div className='geral1'>
                    <div className='imgG1'>
                        <img src={imgG1} alt="Uma menina de cabelos cacheados segurando livros"/>
                    </div>
                    <div className='g1sub'>
                        <h1>O jeito grátis, divertido e eficaz de aprender!</h1>
                        
                        {/* <Button>Comece a aprender agora!</Button> fazer esse botão ir para a pg de cadastro */}
                        {/* <Button>Já tem conta? Acesse aqui!</Button> */}
                    </div>
                </div>
                <div className='geral2'>
                    <div className='imgG2'>
                        <img src={imgG2} alt="um desenho de tres personagens admirando uma beca de graduando"/>
                    </div>
                    <div>
                        <h1>Aprenda com alunos universitários!</h1>
                        <p>Junte-se a uma comunidade de alunos e universitários, onde a aprendizagem é colaborativa: conecte-se, compartilhe e cresça junto com os outros!</p>
                    </div>
                </div>
                <div className='geral3'>
                    <div>
                        <h1>Para você que esta se graduando!</h1>
                        <p>A PESEO oferece aos estudantes a capacidade de eliminar horas complementares através de uma plataforma intuitiva e eficiente, simplificando o processo de validação de atividades extracurriculares.</p>
                    </div>
                    <div className='imgG3'>
                        <img src={imgG3} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                    </div>
                </div>
                <div className='geral4'>
                    <div className='imgG4'>
                        <img src={imgG4} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                    </div>
                    <div>
                        <h1>Ensino dinâmico e acessível.</h1>
                        <p>Priorizamos uma abordagem dinâmica e acessível, proporcionando uma experiência de aprendizado envolvente que se adapta às necessidades individuais dos alunos, promovendo a inclusão e tornando a educação mais acessível a todos.</p>
                    </div>
                </div>
                <div className='geral5'>
                    <div>
                        <h1>Explore e aprenda no seu próprio ritmo, quando e onde quiser.</h1>
                    </div>
                    <div className='imgG5'>
                        <img src={imgG5} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                        <img src={playStore}/> <img src={appleStore}/>
                    </div>
                </div>

                <div className='geral6'>
                    <div>
                        <h1>Com a PESEO se transforma a aprendizagem</h1>
                        <img src={imgG6p1}/>
                        <h1>Ecossistema educacional</h1>
                        <p>A PESEO oferece uma abordagem educacional diferenciada, indo além dos limites convencionais da sala de aula para promover uma experiência de aprendizagem colaborativa e envolvente.</p>
                    
                        <img src={imgG6p2}/>
                        <h1>Elimine suas horas complementares</h1>
                        <p>Alunos universitários em formação podem eliminar horas complementares enquanto contribuem ativamente para a comunidade educacional, ganhando créditos importantes para sua formação.</p>
                    
                        <img src={imgG6p3}/>
                        <h1>Aprenda com uma comunidade</h1>
                        <p>O PESEO promove uma cultura de colaboração, onde todos são incentivados a contribuir com seu conhecimento único, e valoriza a participação ativa dos usuários, enriquecendo a experiência educacional de todos.</p>
                    </div>
                </div>

                <div className='geral7'>
                    <h1>melhore sua aprendizagem com a PESEO</h1>
                    <img src={imgG7}/>
                    {/* <Button>Comece a aprender agora!</Button> fazer esse botão ir para a pg de cadastro */}
                </div>
            </Container>
        </main>
    )
}

export default Home;