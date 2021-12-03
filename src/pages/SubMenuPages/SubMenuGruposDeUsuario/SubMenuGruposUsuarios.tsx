import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { SideBar } from '../../../components/SideBar/Index'

import '../../../styles/pages/SubMenuPages/SubMenuGruposUsuarios/SubMenuGruposUsuarios.css'
import Modal from './modal-GruposDeUsuario/ModalNovoGrupoUser'

function SubMenuGruposUsuarios() {
  return (
    <div className="HomePage">
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
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h2 className="subtPadrao2">Grupos de Usuários</h2>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
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
                  <td className="tblMGUCod">001 </td>
                  <td className="tblMGUPermissao">
                    <Link to="/PermissoesDeacessoAoSistema">
                      <button className="btnMGUPermissoes">
                        <i className="fas fa-bars"></i>
                      </button>
                    </Link>
                  </td>
                  <td className="tblMGUUserGroup">Avaliadores</td>
                  <td className="MGUStatus">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblMGUCod">001 </td>
                  <td className="tblMGUPermissao">
                    <Link to="/PermissoesDeacessoAoSistema">
                      <button className="btnMGUPermissoes">
                        <i className="fas fa-bars"></i>
                      </button>
                    </Link>
                  </td>
                  <td className="tblMGUUserGroup">Humanit</td>
                  <td className="MGUStatus">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblMGUCod">001 </td>
                  <td className="tblMGUPermissao">
                    <Link to="/PermissoesDeacessoAoSistema">
                      <button className="btnMGUPermissoes">
                        <i className="fas fa-bars"></i>
                      </button>
                    </Link>
                  </td>
                  <td className="tblMGUUserGroup">Administrativo</td>
                  <td className="MGUStatus">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblMGUCod">001 </td>
                  <td className="tblMGUPermissao">
                    <Link to="/PermissoesDeacessoAoSistema">
                      <button className="btnMGUPermissoes">
                        <i className="fas fa-bars"></i>
                      </button>
                    </Link>
                  </td>
                  <td className="tblMGUUserGroup">APP</td>
                  <td className="MGUStatus">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <ProfileDireita />
      <div className="buttonProfileDireita"></div>
      <SidebarMobile />
    </div>
  )
}

export default SubMenuGruposUsuarios
