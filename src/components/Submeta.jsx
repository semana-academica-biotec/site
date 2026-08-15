import React from 'react';

const Submeta = () => {
  return (
    <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#2c3e50' }}>
            Submeta seu trabalho
          </h2>
          <h3 className="text-center mb-5 fw-bold"
          style={{ color:'#2c3e50'}}>As submissões estarão abertas a partir de 17/08!</h3>
        <p>
            Poderão ser submetidos trabalhos nas modalidades <strong>Pesquisa, Ensino ou Extensão</strong> por alunos de <strong>graduação</strong> ou
            <strong> pós-graduação</strong>, desde que estejam de acordo com as normas estabelecidas para submissão, e sejam relacionados à área de Biotecnologia.
            <br/><br/>
            Os trabalhos submetidos serão avaliados pela <strong>Comissão Científica do evento</strong>. Os trabalhos aprovados poderão ser selecionados para <strong>apresentação oral</strong>, conforme os critérios de avaliação e a disponibilidade prevista na programação.
            <br/><br/>
            Os trabalhos que forem aprovados pela Comissão Científica mas não forem selecionados para apresentação oral serão publicados nos <strong>anais do evento</strong>, conforme as normas estabelecidas.
        </p>

            <div className="alert alert-primary d-flex align-items-center" role="alert">  
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                className="bi flex-shrink-0 me-2" 
                viewBox="0 0 16 16" 
                role="img" 
                aria-label="Warning:"
                >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                    <div>
                    Importante: Para submeter seu trabalho, primeiro você deve estar inscrito como <strong>ouvinte</strong>. Se ainda não está, <a href="/inscrições">clique aqui</a>.
                    <br/>Além disso, a submissão do trabalho não garante sua seleção para apresentação oral.
                    </div>
            </div>
            {/* Main submission button */}
            {/* <div className="text-center mt-4">
            <a
                href="YOUR_GOOGLE_FORM_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-theme btn-lg px-5"
            >
                Acessar Formulário de Submissão
            </a>
            </div>*/}
      </div>
    </div>
  );
};

export default Submeta;
