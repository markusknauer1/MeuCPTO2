import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as TypIcons from 'react-icons/ti'
import Modal from './modal-tiposDeObservações/modalNovoGrupoDeQuestoes'
import { NavDireita } from '../../../components/SideBar/Index'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage4 } from '../../../components/Main'

function TipoQualidadeDeObservacao() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
        <SidebarMobile />
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
        <div className="page">
          <div className="filter1">
            <TitlePage4>Grupo de Questões - ######</TitlePage4>
            {/* QUALIDADE DA OBSERVAÇÃO */}
          </div>
          <div className="tabelaPadrao">
            <div className="containerPadrao2">
              <table>
                <tbody>
                  <td className="TQOCod">
                    <Link to="/TQOQuestoesReg">
                      <button className="TQOCodNumber">001</button>{' '}
                    </Link>
                  </td>
                  <td className="TQOQuests">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      <i className="fas fa-bars"></i>
                      <label className="TQOQUESTOES">Questões</label>
                    </button>
                  </td>
                  <td className="TQOGroupAnalise">
                    <Link to="/TQOQuestoesReg">
                      <button className="btnMGUPermissoes">
                        Cuidado Ativo
                      </button>
                    </Link>
                  </td>
                  <td className="TQOState">
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                </tbody>

                {/* ============================================================= */}

                {modal && (
                  <div className="modalNovoGrupoDeQuestoes">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modalPadrao-content">
                      <h2 className="titleModal">
                        Alterar Grupo De Questões
                        <hr className="hrTitleModal" />
                      </h2>

                      <input
                        className="NGQCod"
                        placeholder="Cód"
                        id="fname"
                        name="fname"
                      ></input>

                      <input
                        className="NGQDescricao"
                        placeholder="Descrição"
                        id="fname"
                        name="fname"
                      ></input>

                      <textarea
                        className="NGQObservacao"
                        placeholder="Observações"
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
          </div>
        </div>
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
      </ContainerPage>
    </div>
  )
}

export default TipoQualidadeDeObservacao
