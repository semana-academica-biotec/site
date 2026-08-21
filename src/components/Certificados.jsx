import React from 'react'

const Certificados = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          
          {/* Main section title */}
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#2c3e50' }}>
            Certificados
          </h2>
          <p className='fs-4 mt-5 recuo'>Os certificados serão enviados por e-mail após o término do evento. Para mais informações, entre em contato conosco: <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer">@dabiotecufpel</a> <a href="https://www.instagram.com/semanaacademica.biotec/" target="_blank" rel="noopener noreferrer">@semanaacademica.biotec</a>
          <br/>Ou, visite nossa aba de <a href="/faq">Perguntas Frequentes</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certificados
