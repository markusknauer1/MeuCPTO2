import React from 'react'

import * as TypIcons from 'react-icons/ti'

import { Link } from 'react-router-dom'
import { ContainerPage, TitlePage2 } from '../../../../components/Main'
import ProfileDireita from '../../../../components/ProfileDireita'
import SidebarMobile from '../../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../../components/SideBar/Index'
import '../../../../styles/SubMenuPages/SubMenuTipoDeObservação/Questões-tiposDeQuestões/TQOQuestoesReg.css'
function TQOQuestoesReg() {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
        <div className="logo" />
        <Link to="/tipoQualidadeDeObservacao">
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
                    <button className="btnTQOAltInfo">
                      <i className="fas fa-pen"></i>{' '}
                    </button>
                    Estava importando os EPI's necessários para o local?...
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
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
        <SidebarMobile />
      </ContainerPage>
    </div>
  )
}

export default TQOQuestoesReg
