import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/ModalObservações/ModalUnidades.css'

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-ModalObsUnidades')
  } else {
    document.body.classList.remove('active-ModalObsUnidades')
  }

  return (
    <>
      <button onClick={toggleModal} className="buttonModalObservaçoes">
        Observações
      </button>

      {modal && (
        <div className="ModalObsUnidades">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="ModalObsUnidades-content">
            <h2 className="titleObsUnidade">Observações Realizadas</h2>
            <input
              className="fListObserv"
              placeholder="Pesquisar"
              type="text"
              id="fname1"
              name="fname"
            />

            <div className="tabelaRegistro">
              <section className="HeaderContent">
                <div className="containerObsReal">
                  <table>
                    <thead>
                      <tr className="header">
                        <th className="tblObsUniObservador">
                          <div>Observador</div>
                        </th>
                        <th className="tblObsUniLocal">
                          <div>Local</div>
                        </th>
                        <th className="tblObsUniGerência">
                          <div>Gerência do Local</div>
                        </th>
                        <th className="tblObsUniEquipe">
                          <div>Equipe Abordada</div>
                        </th>
                        <th className="tblObsUniAtividade">
                          <div>Gerencia da Equipe</div>
                        </th>
                        <th className="tblObsUniData">
                          <div>Data</div>
                        </th>
                        <th className="tblObsUniIcs">
                          <div>ICS</div>
                        </th>
                        <th className="tblObsUniDetalhes">
                          <div>Detalhes</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                    <tbody>
                      <td className="btnObsObservador">
                        Altair Quintino Turbay Junior
                      </td>
                      <td className="btnObsUniLocal">Almoxarifado</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniEquipe">Transporte Leve</td>
                      <td className="btnObsUniAtividade">
                        Gestão de Processos
                      </td>
                      <td className="btnObsUniData">15/10/2021</td>
                      <td className="btnObsUniIcs">95%</td>
                      <td className="btnObsUniDetalhes">
                        <button className="verifObserv1">
                          <i class="far fa-smile-beam"></i>
                        </button>
                        <Link to="/ObservCpto">
                          <button className="verifObserv2">
                            <i class="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <button className="close-ModalObsUnidades" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  )
}
