import React from 'react'

const FAQ = () => {
  // Dados para os elementos do bootstrap
  const faqData = [
    {
      id: "faq1",
      question: "Quem pode participar da II Semana Acadêmica de Biotecnologia?",
      answer: <>A II Semana Acadêmica de Biotecnologia é aberta a estudantes, pesquisadores, profissionais e demais interessados na área da Biotecnologia.</>
    },
    {
      id: "faq2",
      question: "Como faço minha inscrição?",
      answer: <>A inscrição deve ser realizada por meio do formulário disponibilizado na aba <em>“Inscreva-se”</em> do site oficial do evento.</>
    },
    {
      id: "faq3",
      question: "Quais são os valores da inscrição?",
      answer: <>A modalidade ouvinte possui três lotes: 1º lote — R$ 15,00; 2º lote — R$ 20,00; e 3º lote — R$ 25,00.</>
    },
    {
      id: "faq4",
      question: "Posso me inscrever em mais de um minicurso?",
      answer: <>Sim. Cada participante poderá se inscrever em <em>até 2 (dois) minicursos</em>, conforme disponibilidade de vagas e programação.</>
    },
    {
      id: "faq5",
      question: "Haverá certificado?",
      answer: <>Sim. Serão emitidos certificados conforme a modalidade de participação e os critérios estabelecidos no Regimento do evento.</>
    },
    {
      id: "faq6",
      question: "O certificado terá carga horária?",
      answer: <>Os certificados de <em>ouvinte e de minicurso serão emitidos com indicação de carga horária</em>.</>
    },
    {
      id: "faq7",
      question: "Posso cancelar minha inscrição e receber o dinheiro de volta?",
      answer: <>Não. <em>Não haverá reembolso dos valores pagos em caso de desistência ou ausência do participante.</em></>
    },
    {
      id: "faq8",
      question: "Posso submeter um trabalho e participar como ouvinte?",
      answer: <>Sim. A submissão de trabalho e a inscrição como ouvinte são modalidades distintas de participação no evento.</>
    },
    {
      id: "faq9",
      question: "A submissão garante a apresentação do trabalho?",
      answer: <>Não. Os trabalhos serão avaliados pela Comissão Científica, e apenas os trabalhos selecionados serão destinados à apresentação oral.</>
    },
    {
      id: "faq10",
      question: "Meu trabalho será publicado?",
      answer: <>Os trabalhos aprovados pela Comissão Científica serão publicados nos anais do evento, conforme as normas estabelecidas.</>
    },
    {
      id: "faq11",
      question: "Quem pode apresentar o trabalho?",
      answer: <>Os trabalhos selecionados para apresentação oral deverão ser apresentados preferencialmente pelo primeiro autor. Em caso de impossibilidade de comparecimento do primeiro autor, a apresentação poderá ser realizada por um dos coautores, mediante comunicação prévia à Comissão Organizadora.</>
    }
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          
          {/* Main section title */}
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#2c3e50' }}>
            Perguntas Frequentes
          </h2>
          
          {/* Interactive Bootstrap Accordion wrapper */}
          <div className="accordion shadow-sm rounded" id="faqAccordion">
            
            {/* Iterating through the faqData array to dynamically render each item */}
            {faqData.map((item) => (
              <div className="accordion-item" key={item.id}>
                
                {/* Question Header / Clickable Button */}
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${item.id}`} 
                    aria-expanded="false" 
                    aria-controls={`collapse${item.id}`}
                    style={{ color: '#34495e' }}
                  >
                    {item.question}
                  </button>
                </h2>
                
                {/* Expandable Answer Body */}
                <div 
                  id={`collapse${item.id}`} 
                  className="accordion-collapse collapse" 
                  aria-labelledby={`heading${item.id}`} 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{ lineHeight: '1.7', color: '#555' }}>
                    {item.answer}
                  </div>
                </div>
                
              </div>
            ))}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ
