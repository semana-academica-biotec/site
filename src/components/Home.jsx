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
              <br />- Assistir palestras de profissionais da comunidade científica;
              <br />- Participar de minicursos;
              <br />- Realizar apresentação oral de trabalhos;
              <br />- Interagir com empresas, divulgadores científicos e pesquisadores da UFPel e de outras instituições do Brasil.
              <br /><br />Desta forma, um dos objetivos deste evento é <strong>promover a interação da comunidade acadêmica</strong> e impulsionar diferentes áreas de conhecimento acerca da Biotecnologia.
          </p> 
      </div>

      <div className='border rounded-5 mt-5 fs-5 text-center mx-auto shadow' style={{width: "70%"}}>
        <h3 className='mt-4 fs-1 text-center mb-4 info'>INFORMAÇÕES</h3>
        <p><strong>Data do evento</strong> <br />De 13 a 16 de Outubro de 2026</p>
        <p className='mb-4'><strong>Local das palestras</strong> <br />Anfiteatro da FAEM - dias 15 e 16 de outubro</p>
      </div>


      {/* Map Section embedded directly inside the container */}
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-md-10">
          
          <div className="text-center mb-4">
            <h3 className="fw-bold" style={{ color: '#2c3e50' }}>Como chegar ao anfiteatro da FAEM?</h3>
            <p className="text-muted">
            </p>
          </div>

          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847.7074874416832!2d-52.4162439008026!3d-31.80238409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511cbc7e4563ad9%3A0xd9ba50899aa227d8!2sFAEM-UFPel!5e0!3m2!1spt-BR!2sbr!4v1791984847331!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa FAEM-UFPel"
              ></iframe>
            </div>
            
            <div className="card-body bg-light text-center py-4">
              <h5 className="card-title fw-bold">FAEM — UFPel (Faculdade de Agronomia Eliseu Maciel)</h5>
              <p className="card-text text-muted mb-3">
                Campus Capão do Leão — Pelotas, RS
              </p>
              <a 
                href="https://maps.app.goo.gl/9uK8d9ba50899aa2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm px-4 rounded-pill"
              >
                Abrir no Google Maps
              </a>
            </div>
            
          </div>
            <p className='mb-5 text-center mt-4'> Para mais informações, acompanhe no instagram: <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer">@dabiotecufpel</a> e <a href="https://www.instagram.com/semanaacademica.biotec/" target="_blank" rel="noopener noreferrer">@semanaacademica.biotec</a> </p>
        </div>
      </div>

    </div>
  )
}

export default Home
