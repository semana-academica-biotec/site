import React from 'react'

const Inscrever = () => {
  // Dados para a tabela de lotes
  const registrationBatches = [
    { 
      id: 1, 
      batchName: "Lote 1", 
      price: "R$ 15,00", 
      period: "14/08 até 31/08" 
    },
    { 
      id: 2, 
      batchName: "Lote 2", 
      price: "R$ 20,00", 
      period: "01/09 até 20/09" 
    },
    { 
      id: 3, 
      batchName: "Lote 3", 
      price: "R$ 25,00", 
      period: "21/09 até 12/10" 
    }
  ];

  return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            
            {/* Main section title */}
            <h2 className="text-center mb-4 fw-bold" style={{ color: '#182F4D' }}>
              Inscrição como Ouvinte
            </h2>
            <p className='text-center'><strong>Nesta edição, as inscrições serão realizadas na modalidade de lotes:</strong></p>
            {/* Table container with shadow and rounded corners */}
            <div className="table-responsive shadow-sm rounded border">
              <table className="table table-hover table-borderless mb-0 align-middle text-center">
                
                {/* Table header styled with a dark background */}
                <thead style={{ backgroundColor: '#0D6C77', color: '#ffffff' }}>
                  <tr>
                  <th scope="col" className="py-3" style={{ backgroundColor: 'transparent', color: 'inherit' }}>Lote</th>
                  <th scope="col" className="py-3" style={{ backgroundColor: 'transparent', color: 'inherit' }}>Período</th>
                  <th scope="col" className="py-3" style={{ backgroundColor: 'transparent', color: 'inherit' }}>Valor</th>
                </tr>
                </thead>
                
                {/* Table body rendering the batches dynamically */}
                <tbody>
                  {registrationBatches.map((batch) => (
                    <tr key={batch.id} style={{ transition: 'all 0.3s ease' }}>
                      <td className="py-3 fw-bold">{batch.batchName}</td>
                      <td className="py-3 text-muted">{batch.period}</td>
                      <td className="py-3 text-success fw-bold fs-5">{batch.price}</td>
                    </tr>
                  ))}
                </tbody>
                
              </table>
            </div>
            <br /><br />
            <p className='fs-4 mt-5 recuo'>A inscrição na modalidade <strong>ouvinte</strong> permite a participação nas palestras e demais atividades destinadas aos participantes, conforme a <strong>programação oficial do evento</strong>. Será emitido certificado de participação como ouvinte, de acordo com os critérios estabelecidos no Regimento da II Semana Acadêmica de Biotecnologia.<br /><br />As inscrições estarão sujeitas à disponibilidade de vagas e deverão ser realizadas dentro dos períodos estabelecidos para cada lote.</p>

            <p className='mt-4 text-center'>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFY_IU-MwyDbXFKiJjLbcTQdkBKQY83Ggy7f11tog5sNQM-Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-theme btn-lg p-4"
            >
              Clique para se inscrever como ouvinte!
            </a></p>

            <div className="alert alert-warning d-flex align-items-center" role="alert">  
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="currentColor" 
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" 
              viewBox="0 0 16 16" 
              role="img" 
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>
              Importante: não haverá reembolso dos valores pagos em caso de desistência, cancelamento ou ausência do participante.
            </div>
          </div>

          </div>
        </div>
      </div>
    )
}

export default Inscrever
