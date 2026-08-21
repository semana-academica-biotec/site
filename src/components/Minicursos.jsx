import React from 'react';

const Minicursos = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: '#2c3e50' }}>
        Minicursos
      </h2>
      
      <p className='fs-4 mt-5 recuo'>
        A II Semana Acadêmica de Biotecnologia contará com minicursos que serão realizados ao longo de <strong>dois dias</strong>, conforme a programação oficial do evento.

        <br/><br/>Cada participante poderá se inscrever <strong>em até 2 (dois)  minicursos</strong>, de acordo com a disponibilidade de vagas e a programação.

        Para receber o certificado de participação em cada minicurso, o participante deverá estar devidamente inscrito na respectiva atividade e ter sua <strong>presença registrada na chamada inicial e na chamada final de cada dia do minicurso</strong>.

        <br/><br/>A <strong>ausência</strong> em qualquer uma das chamadas obrigatórias poderá resultar na <strong>não emissão</strong> do certificado de participação. Além disso, o certificado será emitido com a <strong>carga horária</strong> referente ao <strong>minicurso escolhido</strong>.

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
                    Importante: informações sobre os minicursos disponíveis, incluindo títulos, ministrantes, datas, horários, vagas e valores, serão divulgadas em breve.
                    </div>
            </div>

    </div>
  );
};

export default Minicursos;