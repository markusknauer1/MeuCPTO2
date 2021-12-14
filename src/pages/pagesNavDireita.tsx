import { FC, useState } from 'react'
import ProfileDireita from '../components/ProfileDireita'
import ModalArea from './MenuDireito/MenuDireito-Modal/ModalCadArea'
import ModalAtividade from './MenuDireito/MenuDireito-Modal/ModalCadAtividade'
import ModalEquipes from './MenuDireito/MenuDireito-Modal/ModalCadEquipe'
import ModalGerencias from './MenuDireito/MenuDireito-Modal/ModalCadGerencia'
import ModalObservacoes from './MenuDireito/MenuDireito-Modal/ModalCadObservacoes'
import '../styles/pagesSidebarDireita.css'
import {
  ContainerPage,
  TitlePage1,
  TitlePage2,
  TitlePage4
} from '../components/Main'
import { NavDireita } from '../components/SideBar/Index'
import SidebarMobile from '../components/SideBar-navegaçao-direita/SidebarMobile'

export const Area: FC = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
                    <th className="btnGerenResp">
                      <div>Gerência / Responsável</div>
                    </th>
                    <th className="btnLocalArea">
                      <div>Local / Área</div>
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
                  <td className="tblCodArea">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      001
                    </button>
                  </td>
                  <td className="tblObserv">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="tblLocalArea">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Gerência
                    </button>
                  </td>
                  <td className="tblGerenResp">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Cliente
                    </button>
                  </td>
                  <td className="tblMeta">
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="tblStatusAtivo">
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                </tbody>

                {/* ========================================================================== */}
                {modal && (
                  <div className="modalArea">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modalPadrao-content">
                      <h2 className="titleModal">Nova Área</h2>
                      <hr className="hrTitleModal1" />

                      <input
                        className="fArea"
                        placeholder="Nova Área"
                        type="text"
                        id="fname"
                        name="fname"
                        autoComplete="none"
                      ></input>

                      <select name="Selecione" className="fAreaRef" id="fSexo">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                      </select>

                      <textarea
                        className="fObsArea"
                        placeholder="Observações"
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
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Atividades: FC = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
                    <td className="tblCodAtivid">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>
                    </td>
                    <td className="tblAtivid">
                      {' '}
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Atividade atual em observação
                      </button>
                    </td>
                    <td className="tblStatusAtivid">
                      {' '}
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-bars"></i>
                      </button>
                      <button className="action"></button>
                    </td>
                  </tbody>
                  {/* ==================================================== */}
                  {modal && (
                    <div className="modalAtividade">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">Alterar Atividade</h2>
                        <hr className="hrTitleModal1" />

                        <input
                          className="fDescAtividade"
                          placeholder="Alterar Atividade"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <textarea
                          className="fObsAtividade"
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
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Equipes: FC = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
                    <td className="tblEquipesCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>
                    </td>
                    <td className="tblEquipesOBS">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Descriçao / equipe
                      </button>
                    </td>
                    <td className="tblEquipesMail">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Gerência
                      </button>
                    </td>
                    <td className="tblEquipesFunc">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Klabim
                      </button>
                    </td>
                    <td className="tblEquipesMetas">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>

                  {/* ===============================Modal Alterar Informação da lista============================ */}
                  {modal && (
                    <div className="modalEquipe">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">Alterar Equipe</h2>
                        <hr className="hrTitleModal1" />

                        <input
                          className="fcadastroEquipe"
                          placeholder="Nome"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <select
                          name="Selecione"
                          className="fgerResp"
                          id="fSexo"
                        >
                          <option value="">Select</option>
                          <option value="">Select</option>
                          <option value="">Select</option>
                        </select>

                        <textarea
                          className="fObs"
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
            </section>
          </div>
        </div>
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Gerencias: FC = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
                    <td className="tblGerCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                      </button>
                    </td>
                    <td className="tblGerDesc">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Descrição
                      </button>
                    </td>
                    <td className="tblGerUni">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        Klabim
                      </button>
                    </td>
                    <td className="tblGerStatus">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-bars"></i>
                      </button>
                    </td>
                  </tbody>
                  {/* ===============================Modal Alterar Informação da lista============================ */}
                  {modal && (
                    <div className="modalGerencia">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">Alterar Gerência</h2>
                        <hr className="hrTitleModal1" />

                        <input
                          className="fDescGerencia"
                          placeholder="Alterar Gerência"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <textarea
                          className="fObsGerencia"
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
        <NavDireita />
      </ContainerPage>
    </div>
  )
}
export const Observacoes: FC = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
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
            <TitlePage4>Funções e Permissões de obsevação</TitlePage4>
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
                      <td className="btnObsCod">
                        <button
                          className="altInfoModPessoa"
                          onClick={toggleModal}
                        >
                          001
                        </button>
                      </td>
                      <td className="btnObs">
                        <button
                          className="altInfoModPessoa"
                          onClick={toggleModal}
                        >
                          <i className="fas fa-bars"></i>
                        </button>
                      </td>
                      <td className="BtnDescFun">
                        <button
                          className="altInfoModPessoa"
                          onClick={toggleModal}
                        >
                          Nome do Funcionário
                        </button>
                      </td>
                      <td className="btnStatus">
                        <label className="container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>

                  {/* ================================================================================ */}

                  {modal && (
                    <div className="modalObservacoes">
                      <div onClick={toggleModal} className="overlay"></div>
                      <div className="modalPadrao-content">
                        <h2 className="titleModal">Alterar Observação</h2>
                        <hr className="hrTitleModal4" />

                        <input
                          className="fDescObservaçoes"
                          placeholder="Alterar Observação"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        ></input>

                        <textarea
                          className="fObsObservaçoes"
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
                        <div>CÓD</div>
                      </th>
                      <th className="tblUni">
                        <div>Unidades</div>
                      </th>
                      <th className="tblStatusUnidades">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnCod">001</td>
                    <td className="btnUni">Unidade</td>
                    <td className="btnStatusUnidades">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
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
