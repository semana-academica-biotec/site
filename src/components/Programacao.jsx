import React from 'react';

const Programacao = () => {
  return (
    <div className="container mt-5 mb-5">
      
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5" style={{ color: '#2c3e50' }}>
          Programação do Evento
        </h1>
        <p className="lead text-muted mt-2">
          Confira os horários e atividades da II Semana Acadêmica de Biotecnologia.
        </p>
      </div>

      {/* --- SECTION: MINICURSOS (Toggle / Accordion) --- */}
      <div className="mb-5">
        <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
          <h3 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Minicursos</h3>
          <p className="text-muted mb-4">Clique nas abas abaixo para conferir os minicursos de cada dia.</p>

          <div className="accordion" id="minicursosAccordion">
            
            {/* DIA 13 */}
            <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
              <h2 className="accordion-header" id="headingDia13">
                <button 
                  className="accordion-button fw-bold bg-light text-dark" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseDia13" 
                  aria-expanded="true" 
                  aria-controls="collapseDia13"
                >
                  Minicursos — 13 de Outubro (Terça-feira)
                </button>
              </h2>
              <div id="collapseDia13" className="accordion-collapse collapse show" aria-labelledby="headingDia13" data-bs-parent="#minicursosAccordion">
                <div className="accordion-body p-0">
                  <div className="table-responsive m-0">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" style={{ width: '70%' }}>Minicurso</th>
                          <th scope="col" className="text-center" style={{ width: '30%' }}>Horário</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-active">
                          <td colSpan="2" className="fw-bold text-secondary small">Manhã (8:30 às 12:30)</td>
                        </tr>
                        <tr>
                          <td>Do Estresse Oxidativo à Neuroproteção: Entendendo e Avaliando Antioxidantes</td>
                          <td className="text-center">8:30 às 12:30</td>
                        </tr>

                        <tr className="table-active">
                          <td colSpan="2" className="fw-bold text-secondary small">Tarde (14:00 às 17:00)</td>
                        </tr>
                        <tr>
                          <td>Métodos computacionais para desenho racional de fármacos</td>
                          <td className="text-center">14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Biofilme Bacteriano</td>
                          <td className="text-center">14:00 às 17:00</td>
                        </tr>

                        <tr className="table-active">
                          <td colSpan="2" className="fw-bold text-secondary small">Integral (8:30 às 12:30 e 14:00 às 17:00)</td>
                        </tr>
                        <tr>
                          <td>Microinjeção em Zebrafish para Edição Genômica por CRISPR</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Fundamentos e Prática em Cromatografia e Dicroísmo Circular</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Efluentes como recursos biotecnológicos: Bioprospecção e biorrefinaria de microalgas e cianobactérias</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* DIA 14 */}
            <div className="accordion-item border-0 shadow-sm rounded-3 overflow-hidden">
              <h2 className="accordion-header" id="headingDia14">
                <button 
                  className="accordion-button collapsed fw-bold bg-light text-dark" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseDia14" 
                  aria-expanded="false" 
                  aria-controls="collapseDia14"
                >
                  Minicursos — 14 de Outubro (Quarta-feira)
                </button>
              </h2>
              <div id="collapseDia14" className="accordion-collapse collapse" aria-labelledby="headingDia14" data-bs-parent="#minicursosAccordion">
                <div className="accordion-body p-0">
                  <div className="table-responsive m-0">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" style={{ width: '70%' }}>Minicurso</th>
                          <th scope="col" className="text-center" style={{ width: '30%' }}>Horário</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-active">
                          <td colSpan="2" className="fw-bold text-secondary small">Manhã (8:30 às 12:30)</td>
                        </tr>
                        <tr>
                          <td>Criação de nanoestruturas funcionais por eletrofiação: Princípios, Processos e Aplicações</td>
                          <td className="text-center">8:30 às 12:30</td>
                        </tr>

                        <tr className="table-active">
                          <td colSpan="2" className="fw-bold text-secondary small">Integral (8:30 às 12:30 e 14:00 às 17:00)</td>
                        </tr>
                        <tr>
                          <td>Clonagem de DNA e Expressão de Proteínas Recombinantes</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Anatomia de roedores de laboratório</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Fundamentos de Vacinologia Experimental: Formulação, dose e imunogenicidade</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Introdução ao Sequenciamento automatizado de Sanger</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Imunodiagnóstico de covid-19: da seleção do antígeno à detecção de anticorpos</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                        <tr>
                          <td>Gateway, Golden Gate e Nimble Cloning para Transformação Genética em Plantas</td>
                          <td className="text-center">8:30 às 12:30; 14:00 às 17:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- DIA 15 DE OUTUBRO --- */}
      <div className="mb-5">
        <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
          <h3 className="fw-bold mb-4" style={{ color: '#2c3e50' }}>15 de Outubro (Quinta-feira)</h3>
          
          <div className="d-flex flex-column gap-4">
            {/* Manhã */}
            <div>
              <h5 className="fw-bold border-bottom pb-2" style={{ color: '#0A898F' }}>Manhã</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>8:00</strong>
                  <span>Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>8:30</strong>
                  <span>Abertura</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>9:10</strong>
                  <span><strong>Ciência que não circula, transforma?</strong> — Palestra por Fábio Frá Fernandes</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-light">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>10:00</strong>
                  <span>Coffee Break e Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>10:30</strong>
                  <span><strong>Cognição em Plantas</strong> — Palestra por Luís Felipe Basso</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>11:00</strong>
                  <span><strong>A Neurobiologia do Câncer</strong> — Palestra por Rafael Roesler</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>11:30</strong>
                  <span><strong>O envelhecimento que começa antes do tempo</strong> — Palestra por Bruno Kendi</span>
                </li>
              </ul>
            </div>

            {/* Tarde */}
            <div>
              <h5 className="fw-bold border-bottom pb-2" style={{ color: '#0A898F' }}>Tarde</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>13:00</strong>
                  <span>Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>13:30</strong>
                  <span><strong>Da bancada ao mercado</strong> — Palestra por Gabrielito Menezes</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>14:00</strong>
                  <span><strong>Micro RNAs como biomarcadores</strong> — Palestra por Mariana Remião</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>14:30</strong>
                  <span>Palestra por Cristiana Dora</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-light">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:00</strong>
                  <span>Coffee Break e Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:20</strong>
                  <span><strong>Biossensores em ação: da detecção à decisão</strong> — Palestra por Clarissa Marques</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:50</strong>
                  <span><strong>Modelos de Linguagem e IA Generativa da Descoberta de Fármacos</strong> — Palestra por Karina Machado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- DIA 16 DE OUTUBRO --- */}
      <div className="mb-4">
        <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
          <h3 className="fw-bold mb-4" style={{ color: '#2c3e50' }}>16 de Outubro (Sexta-feira)</h3>
          
          <div className="d-flex flex-column gap-4">
            {/* Manhã */}
            <div>
              <h5 className="fw-bold border-bottom pb-2" style={{ color: '#0A898F' }}>Manhã</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>8:00</strong>
                  <span>Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>8:30</strong>
                  <span>Bloco 1 - Apresentação Oral Graduação</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>9:10</strong>
                  <span>Arguição</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-light">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>9:30</strong>
                  <span>Coffee Break e Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>10:00</strong>
                  <span>Bloco 2 - Apresentação Oral Graduação</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>10:40</strong>
                  <span>Arguição</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>11:00</strong>
                  <span>Bloco 3 - Apresentação Oral Pós-Graduação</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>11:30</strong>
                  <span>Arguição</span>
                </li>
              </ul>
            </div>

            {/* Tarde */}
            <div>
              <h5 className="fw-bold border-bottom pb-2" style={{ color: '#0A898F' }}>Tarde</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>13:00</strong>
                  <span>Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>13:30</strong>
                  <span><strong>Comunicando ciência</strong> — Palestra por Daniel Dahis</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>14:00</strong>
                  <span><strong>Imunoterapias no combate às superbactérias</strong> — Palestra por Isabel Pereira</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>14:30</strong>
                  <span><strong>Prospecção toxicológica de novos agroquímicos</strong> — Palestra por Isacc Konig</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-light">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:00</strong>
                  <span>Coffee Break e Credenciamento</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:20</strong>
                  <span><strong>Recursos genéticos vegetais do Bioma Pampa</strong> — Palestra por Gustavo Heiden</span>
                </li>
                <li className="list-group-item d-flex align-items-center py-3">
                  <strong className="text-dark me-4" style={{ minWidth: '60px' }}>15:50</strong>
                  <span>Encerramento e Premiações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    {/* --- ENCERRAMENTO / CONFRATERNIZAÇÃO --- */}
      <div className="card border-0 rounded-4 p-4 text-white text-center shadow-sm" style={{ backgroundColor: 'rgba(7, 85, 97, 0.7)' }}>
        <h4 className="fw-bold mb-2">Comemoração de Encerramento</h4>
        <p className="mb-1 fs-5">Venha celebrar conosco o fim da II Semana Acadêmica de Biotecnologia!</p>
        <p className="mb-0 fw-semibold">📅 16 de Outubro (Sexta-feira) às 20h | 📍 Buteco do Franconi</p> <br></br>
        <div>
          <a 
            href="https://maps.app.goo.gl/XWceocExjbiJVtAXA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-light btn-sm fw-bold px-4 py-2 rounded-pill shadow-sm"
            style={{ color: '#0F6B79' }}
          >
            Clique aqui para abrir o caminho no Google Maps!
          </a>
        </div>
      </div>

    </div>

  );
};

export default Programacao;
