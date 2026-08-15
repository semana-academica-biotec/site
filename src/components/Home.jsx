import React from 'react'

const Home = () => {
  return (
    <div className='container'>
    
    <div className='border rounded-5 mt-5 fs-5 text-center mx-auto shadow' style={{width: "70%"}}>
      <h3 className='mt-4 fs-1 text-center mb-4 info'>Biotecnologia em diálogo com a <br></br>comunidade científica</h3>
    </div>

        <div className=''>
           <p className='fs-4 mt-5 recuo'>
                Convidamos estudantes de <strong>graduação</strong> e <strong>pós-graduação</strong> de toda a Universidade Federal de Pelotas para participar da <strong>II Semana Acadêmica de Biotecnologia</strong>.
                <br /><br />O evento, com duração de 4 dias, tem por intuito possibilitar aos participantes:
                <br/>- Assistir palestras de profissionais da comunidade científica;
                <br/>- Participar de minicursos;
                <br/>- Realizar apresentação oral de trabalhos;
                <br/>- Interagir com empresas, divulgadores científicos e pesquisadores da UFPel e de outras instituições do Brasil.
                <br/><br/>Desta forma, um dos objetivos deste evento é <strong>promover a interação da comunidade acadêmica</strong> e impulsionar diferentes áreas de conhecimento acerca da Biotecnologia.
            </p> 
        </div>

    <div className='border rounded-5 mt-5 fs-5 text-center mx-auto shadow' style={{width: "70%"}}>
      <h3 className='mt-4 fs-1 text-center mb-4 info'>INFORMAÇÕES</h3>
      <p><strong>Data do evento</strong> <br />De 13 a 16 de Outubro de 2026</p>
      {/* <p className='mb-4'><strong>Local</strong> <br />[a ser definido]</p> */}
      <p className='mb-4'><strong>Prazo da submissão de trabalhos</strong> <br />De 17 de Agosto até 21 de Setembro de 2026</p>

    </div>
    <p className='mb-5 text-center mt-4'> Para mais informações, acompanhe no instragam: <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer">@dabiotecufpel</a> e <a href="https://www.instagram.com/semanaacademica.biotec/" target="_blank" rel="noopener noreferrer">@semanaacademica.biotec</a> </p>
    </div>
  )
}

export default Home
