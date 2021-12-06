import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerPage, TitlePage4 } from '../../../components/Main'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../components/SideBar/Index'
import '../../../styles/SubMenuPages/SubMenuTextosAtivadores/SubMenuTextosAtivadores.css'
import Modal from './modal-textosAtivadores/ModalNovoGrupo'

function SubMenuTextActive() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fCxPesquisa"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
          <Modal />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage4>Cadastro de Textos Ativadores</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="btnCodActive">
                        CÓD
                        <div>CÓD</div>
                      </th>
                      <th className="btnActive">
                        Grupos de Ativadores
                        <div>Grupos de Ativadores</div>
                      </th>
                      <th className="btnStatusActive">
                        Observações
                        <div>Observações</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblCodActive">
                      001{' '}
                      <Link to="/AtivadoresSociais">
                        <button className="SubMTACod"> Ver ativadores</button>
                      </Link>
                    </td>
                    <td className="tblActive">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Sociais
                      </button>
                    </td>
                    <td className="tblStatusActive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodActive">
                      001{' '}
                      <Link to="/AtivadoresPsicologicos">
                        <button className="SubMTACod"> Ver ativadores</button>
                      </Link>
                    </td>
                    <td className="tblActive">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Psicólogicos
                      </button>
                    </td>
                    <td className="tblStatusActive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodActive">
                      001{' '}
                      <Link to="/AtivadoresFisiológicos">
                        <button className="SubMTACod"> Ver ativadores</button>
                      </Link>
                    </td>
                    <td className="tblActive">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Fisiológicos
                      </button>
                    </td>
                    <td className="tblStatusActive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodActive">
                      001{' '}
                      <Link to="/AtivadoresCognitivos">
                        <button className="SubMTACod"> Ver ativadores</button>
                      </Link>
                    </td>
                    <td className="tblActive">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Cognitivos
                      </button>
                    </td>
                    <td className="tblStatusActive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodActive">
                      001{' '}
                      <Link to="/AtivadoresPessoal">
                        <button className="SubMTACod"> Ver ativadores</button>
                      </Link>
                    </td>
                    <td className="tblActive">
                      <button
                        onClick={toggleModal}
                        className="altInfoModPessoa"
                      >
                        Pessoal
                      </button>
                    </td>
                    <td className="tblStatusActive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure iusto eius suscipit, repellat perferendis praesentium
                      obcaecati aliquid a recusandae alias dolorum mollitia?
                      Eligendi doloribus quia amet earum numquam, assumenda
                      consequuntur.
                    </td>
                  </tbody>

                  {/* ===================================================== */}

                  {modal && (
                    <div className="ModalNovoGrupo">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">Alterar Grupo ativador</h2>
                        <hr className="hrTitleModal3" />

                        <input
                          className="textGrupoDesc"
                          placeholder="Alterar Descrição"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <textarea
                          className="textGrupoDescObs"
                          placeholder="Alterar Observações"
                          id="fname"
                          name="fname"
                          maxLength={500}
                          autoComplete="none"
                        ></textarea>

                        <button className="close-modal" onClick={toggleModal}>
                          X
                        </button>
                        <button onClick={toggleModal} className="gravar-modal">
                          Salvar Registro
                        </button>
                      </div>
                    </div>
                  )}
                </table>
              </div>
            </section>
          </div>
        </div>
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
        <SidebarMobile />
      </ContainerPage>
    </div>
  )
}

export default SubMenuTextActive
