import React, { useState } from 'react'

import * as TypIcons from 'react-icons/ti'

import { useHistory } from 'react-router-dom'
import { ContainerPage, TitlePage2 } from '../../../../components/Main'
import ProfileDireita from '../../../../components/ProfileDireita'
import SidebarMobile from '../../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../../components/SideBar/Index'
import '../../../../styles/SubMenuPages/SubMenuTipoDeObservação/Questões-tiposDeQuestões/TQOQuestoesReg.css'
import ModalNovaQuestao from '../modal-tiposDeObservações/modalNovaQuestao'
function TQOQuestoesReg() {
  let history = useHistory()
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

        <div>
          <input
            className="fCxPesquisa"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
        </div>
        <ModalNovaQuestao />
        <div className="page">
          <div className="filter1">
            <TitlePage2>Questões de : #####</TitlePage2>
            {/* Cuidado Ativo */}
          </div>
          <div className="tabelaPadrao">
            <div className="containerPadrao">
              <table>
                <tbody>
                  <td className="TQOQuestCod">1</td>

                  <td className="TQOQuestGroupAnalise">
                    <button className="btnTQOAltInfo" onClick={toggleModal}>
                      <i className="fas fa-pen"></i>
                    </button>
                    Estava importando os EPI's necessários para o local?
                  </td>
                  <td className="TQOQuestQuests">
                    <label>1,00</label>
                  </td>
                  <td className="TQOQuestState">
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ============================================================= */}
        {modal && (
          <div className="modalNovaQuestao">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modalPadrao-content">
              <h2 className="titleModal">
                Alterar Questão
                <hr className="hrTitleModal" />
              </h2>

              <input
                className="NQCod"
                placeholder="Cód"
                type="text"
                id="fname"
                name="fname"
              ></input>

              <input
                className="NQDescricao"
                placeholder="Descrição"
                type="text"
                id="fname"
                name="fname"
              ></input>

              <input
                className="NQPontos"
                placeholder="Nota"
                type="text"
                id="fname"
                name="fname"
              ></input>

              <textarea
                className="NQObservacao"
                placeholder="Observações"
                id="fname"
                name="fname"
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
        <NavDireita />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>
      </ContainerPage>
    </div>
  )
}

export default TQOQuestoesReg
