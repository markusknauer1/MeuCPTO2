import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerPage, TitlePage4 } from '../../../components/Main'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../components/SideBar/Index'

import '../../../styles/SubMenuPages/SubMenuGruposUsuarios/SubMenuGruposUsuarios.css'
import Modal from './modal-GruposDeUsuario/ModalNovoGrupoUser'

function SubMenuGruposUsuarios() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <Modal />
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
        </div>
        <div className="page">
          <TitlePage4>Grupos de Usuários</TitlePage4>

          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="MGUCod">
                        <div>CÓD</div>
                      </th>
                      <th className="MGUPermissao">
                        <div>Permissões</div>
                      </th>
                      <th className="MGUUserGroup">
                        <div>Grupo Usuário</div>
                      </th>
                      <th className="MGUState">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblMGUCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>{' '}
                    </td>
                    <td className="tblMGUPermissao">
                      <Link to="/PermissoesDeacessoAoSistema">
                        <button className="btnMGUPermissoes">
                          <i className="fas fa-bars"></i>
                        </button>
                      </Link>
                    </td>
                    <td className="tblMGUUserGroup">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Avaliadores
                      </button>
                    </td>
                    <td className="MGUStatus">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblMGUCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>{' '}
                    </td>
                    <td className="tblMGUPermissao">
                      <Link to="/PermissoesDeacessoAoSistema">
                        <button className="btnMGUPermissoes">
                          <i className="fas fa-bars"></i>
                        </button>
                      </Link>
                    </td>
                    <td className="tblMGUUserGroup">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Humanit
                      </button>
                    </td>
                    <td className="MGUStatus">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblMGUCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>{' '}
                    </td>
                    <td className="tblMGUPermissao">
                      <Link to="/PermissoesDeacessoAoSistema">
                        <button className="btnMGUPermissoes">
                          <i className="fas fa-bars"></i>
                        </button>
                      </Link>
                    </td>
                    <td className="tblMGUUserGroup">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Administrativo
                      </button>{' '}
                    </td>
                    <td className="MGUStatus">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblMGUCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>{' '}
                    </td>
                    <td className="tblMGUPermissao">
                      <Link to="/PermissoesDeacessoAoSistema">
                        <button className="btnMGUPermissoes">
                          <i className="fas fa-bars"></i>
                        </button>
                      </Link>
                    </td>
                    <td className="tblMGUUserGroup">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        APP
                      </button>{' '}
                    </td>
                    <td className="MGUStatus">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  {/* ======================================================================================= */}

                  {modal && (
                    <div className="ModalNovoGrupoUser">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">
                          Alterar Grupo De Usuários
                          <hr className="hrTitleModal" />
                        </h2>

                        <input
                          className="NGUDesc"
                          placeholder="Alterar Descrição"
                          type="text"
                          id="fname"
                          name="fname"
                        ></input>

                        <textarea
                          className="NGUObs"
                          placeholder=" Alterar Observação"
                          id="fname"
                          name="fname"
                          maxLength={500}
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
      </ContainerPage>
    </div>
  )
}

export default SubMenuGruposUsuarios
