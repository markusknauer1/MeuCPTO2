import React from 'react'
import { Link } from 'react-router-dom'
import * as TypIcons from 'react-icons/ti'
import Modal from './modal-tiposDeObservações/modalNovoTipoDeObservacao'
import { SideBar } from '../../../components/SideBar/Index'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage4 } from '../../../components/Main'

function tipoQualidadeDeObservacao() {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
        <div className="logo" />
        <Link to="/SubMenuTipoDeObservacao">
          <button className="btnReturn">
            <TypIcons.TiArrowBackOutline />
          </button>
        </Link>
        <div>
          <input
            className="fCxPesquisa"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
        </div>
        <Modal />
        <SideBar />
        <div className="page">
          <div className="filter1">
            <TitlePage4>Grupo de Questões - QUALIDADE DA OBSERVAÇÃO</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <div className="containerPadrao">
              <table>
                <tbody>
                  <td className="TQOCod">1</td>
                  <td className="TQOQuests">
                    <Link to="/TQOQuestoesReg">
                      <button className="btnMGUPermissoes">
                        <i className="fas fa-bars"></i>
                      </button>
                    </Link>
                    Questões
                  </td>
                  <td className="TQOGroupAnalise">Cuidado Ativo</td>
                  <td className="TQOState">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ProfileDireita />
        <div className="buttonProfileDireita">
          <SidebarMobile />
        </div>
      </ContainerPage>
    </div>
  )
}

export default tipoQualidadeDeObservacao
