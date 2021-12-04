import { FC } from 'react'
import ProfileDireita from '../components/ProfileDireita'
import ModalArea from './MenuDireito/MenuDireito-Modal/ModalCadArea'
import ModalAtividade from './MenuDireito/MenuDireito-Modal/ModalCadAtividade'
import ModalEquipes from './MenuDireito/MenuDireito-Modal/ModalCadEquipe'
import ModalGerencias from './MenuDireito/MenuDireito-Modal/ModalCadGerencia'
import ModalObservacoes from './MenuDireito/MenuDireito-Modal/ModalCadObservacoes'
import '../styles/pagesSidebarDireita.css'
import { ContainerPage, TitlePage1, TitlePage2 } from '../components/Main'
import { NavDireita } from '../components/SideBar/Index'
import SidebarMobile from '../components/SideBar-navegaçao-direita/SidebarMobile'

export const Area: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fnameArea"
            name="fname"
          />
          <ModalArea />
        </div>
        <div className="filter1">
          <TitlePage1>DADOS CADASTRAIS / NOVO ÁREA:</TitlePage1>
          <TitlePage2>Local / Área</TitlePage2>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="containerPadrao">
              <table>
                <thead>
                  <tr className="header">
                    <th className="btnCodArea">
                      <div>CÓD</div>
                    </th>
                    <th className="btnObserv">
                      <div>Obs.</div>
                    </th>
                    <th className="btnLocalArea">
                      <div>Local / Área</div>
                    </th>
                    <th className="btnGerenResp">
                      <div>Gerência / Responsável</div>
                    </th>
                    <th className="btnMeta">
                      <div>Metas</div>
                    </th>
                    <th className="btnAtivo">
                      <div>Ativo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Atividades: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fname7"
            name="fname"
          />
          <ModalAtividade />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage1>DADOS CADASTRAIS / NOVA ATIVIDADE:</TitlePage1>
            <TitlePage2>Atividades Observadas</TitlePage2>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="btnCodAtivid">
                        CÓD
                        <div>CÓD</div>
                      </th>
                      <th className="btnAtivid">
                        Atividade
                        <div>Atividade</div>
                      </th>
                      <th className="btnStatusAtiv">
                        Status
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblCodAtivid">001</td>
                    <td className="tblAtivid">Atividade atual em observação</td>
                    <td className="tblStatusAtivid">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Equipes: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fnameEquipes"
            name="fname"
          />
          <ModalEquipes />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage1>DADOS CADASTRAIS / NOVA EQUIPE</TitlePage1>
            <TitlePage2>Equipes</TitlePage2>
          </div>

          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblTtlcodEquipe">
                        CÓD
                        <div>CÓD</div>
                      </th>
                      <th className="tblTtlequipDesc">
                        Descrição / Equipe
                        <div>Descrição / Equipe</div>
                      </th>
                      <th className="tblTtlEquipGer">
                        Gerência Responsável
                        <div>Gerência Responsável</div>
                      </th>
                      <th className="tblTtlEquipCLient">
                        Cliente
                        <div>Cliente</div>
                      </th>
                      <th className="tblTtlEquipState">
                        Status
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblEquipesCod">001</td>
                    <td className="tblEquipesOBS">Descriçao / equipe</td>
                    <td className="tblEquipesMail">Gerência</td>
                    <td className="tblEquipesFunc">Klabim</td>
                    <td className="tblEquipesMetas">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Gerencias: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fnameGerencia"
            name="fname"
          />
          <ModalGerencias />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage1>DADOS CADASTRAIS / NOVA GERÊNCIA:</TitlePage1>
            <TitlePage2>Cadastro de Gerências</TitlePage2>
          </div>

          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblTtlCod">
                        <div>CÓD</div>
                      </th>
                      <th className="tblTtlDescGeren">
                        <div>Descrição / Gerência</div>
                      </th>
                      <th className="tblTtlUnidGer">
                        <div>Unidade</div>
                      </th>
                      <th className="tblTtlStatusGerencia">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblGerCod">001</td>
                    <td className="tblGerDesc">Descrição</td>
                    <td className="tblGerUni">Klabim</td>
                    <td className="tblGerStatus">
                      <button className="action">
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Observacoes: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fCxPesquisa"
            placeholder="Pesquisar"
            type="text"
            id="fnameObs"
            name="fname"
          />
          <ModalObservacoes />
        </div>

        <div className="page">
          <div className="filter1">
            <TitlePage1>DADOS CADASTRAIS / NOVA PESSOA:</TitlePage1>
            <TitlePage2>Funções e Permissões de obsevação</TitlePage2>
          </div>

          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="ObsCod">
                        <div>CÓD</div>
                      </th>
                      <th className="ObsObservador">
                        <div>Observação</div>
                      </th>
                      <th className="ObsDescFun">
                        <div>Descrição da função</div>
                      </th>
                      <th className="ObsStatus">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  {/* ==================================== */}
                  <tbody>
                    <tr>
                      <td className="btnObsCod">001</td>
                      <td className="btnObs">
                        <i className="fas fa-bars"></i>
                      </td>
                      <td className="BtnDescFun">Nome do Funcionário</td>
                      <td className="btnStatus">
                        <i className="far fa-check-circle"></i>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="btnObsCod">001</td>
                      <td className="btnObs">
                        <i className="fas fa-bars"></i>
                      </td>
                      <td className="BtnDescFun">Nome do Funcionário</td>
                      <td className="btnStatus">
                        <i className="far fa-check-circle"></i>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnObsCod">001</td>
                    <td className="btnObs">
                      <i className="fas fa-bars"></i>
                    </td>
                    <td className="BtnDescFun">Nome do Funcionário</td>
                    <td className="btnStatus">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Unidades: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div>
          <input
            className="fnamePadrao"
            placeholder="Pesquisar"
            type="text"
            id="fnameUnidade"
            name="fname"
          />
          <button className="buttonModalPadrao" type="button">
            Nova Unidade
          </button>
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage1>DADOS CADASTRAIS / NOVA UNIDADE:</TitlePage1>
            <TitlePage2>Unidades:</TitlePage2>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblCodUni">
                        CÓD
                        <div>CÓD</div>
                      </th>
                      <th className="tblUni">
                        Unidades
                        <div>Unidades</div>
                      </th>
                      <th className="tblStatusUnidades">
                        Status
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <i className="far fa-check-circle"></i>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
