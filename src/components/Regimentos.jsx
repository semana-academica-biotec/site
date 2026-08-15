import React from 'react';

const Regimentos = () => {
  // Array holding the document information to make it easy to add more files later
  const docs = [
    {
      id: 1,
      title: "Regimento Geral do Evento",
      description: "Regras gerais de participação na Semana Acadêmica.",
      fileName: "regimento_geral.pdf"
    },
    {
      id: 2,
      title: "Regimento para Submissão de Trabalhos",
      description: "Regras para o envio de resumos expandidos.",
      fileName: "regimento_submissao.pdf"
    },
    {
        id:3,
        title: "Modelo de Resumo Expandido",
        description: "Modelo para a escrita dos resumos expandidos.",
        fileName: "modelo_resumo.pdf"
    },
    {
        id:4,
        title: "Modelo de slides para apresentação",
        description: "Modelo de slides a ser seguido para a apresentação oral, caso seu trabalho seja selecionado.",
        fileName: "modelo_slides.pdf"
    }
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#2c3e50' }}>
            Regimentos e Documentos
          </h2>
          
          {/* Bootstrap list group with a subtle shadow for better UI */}
          <div className="list-group shadow-sm">
            {docs.map((doc) => (
              <div 
                key={doc.id} 
                className="list-group-item d-flex justify-content-between align-items-center p-4"
              >
                <div>
                  <h5 className="mb-1 fw-bold">{doc.title}</h5>
                  <p className="mb-0 text-muted">{doc.description}</p>
                </div>
                
                {/* 
                  Using process.env.PUBLIC_URL prevents 404 errors on GitHub Pages.
                  The 'download' attribute tells the browser to download the file directly, 
                  while target="_blank" opens it in a new tab as a fallback.
                */}
                <a 
                  href={`${process.env.PUBLIC_URL}/docs/${doc.fileName}`} 
                  className="btn btn-outline-dark px-4"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Regimentos;