import '../../../styles/SubMenuPages/SubMenuTipoDeObservação/SubMenuTipoDeObservacao.css'
import { Link } from 'react-router-dom'
import Modal from './modal-tiposDeObservações/modalNovoTipoDeObservacao'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage4 } from '../../../components/Main'
import { NavDireita } from '../../../components/SideBar/Index'
import { useState } from 'react'

function SubMenuTipoDeObservacao() {
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
            id="fname1"
            name="fname"
          />
          <Modal />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage4>Tipos de Observações</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblSubTipObsCod">
                        <div>CÓD</div>
                      </th>
                      <th className="tblSubTipObsPessoad">
                        <div>Descrição da Observação</div>
                      </th>
                      <th className="tblSubTipObsfator1">
                        <div className="tblPermitir">
                          fator
                          <br />
                          (+)
                        </div>
                      </th>
                      <th className="tblSubTipObsfator2">
                        <div className="tblPermitir">
                          fator
                          <br />
                          (-)
                        </div>
                      </th>
                      <th className="tblSubTipObsFatorN">
                        <div className="tblPermitir">
                          fator
                          <br />
                          (N)
                        </div>
                      </th>
                      <th className="tblSubTipObsPermissao">
                        <div className="tblPermitir">
                          Permitir <br />
                          NA
                        </div>
                      </th>
                      <th className="tblSubTipObsAtivo">
                        <div>Ativo</div>
                      </th>
                    </tr>
                  </thead>
                  {/* ============================ */}
                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>{' '}
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      {' '}
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">
                          QUALIDADE DA OBSERVAÇÃO
                        </button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>
                  {/* ========================= */}
                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">
                          OBSERVAÇÃO COMPORTAMENTAL
                        </button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">13</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">
                          OCORRÊNCIAS
                        </button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">13</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">
                          DIÁLOGO DIÁRIO DE SEGURANÇA (DDS)
                        </button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">
                          NOVA OBSERVAÇÃO
                        </button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">15</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tbody>

                  <tbody>
                    <td className="btnSubTipObsCod">
                      <button
                        className="altInfoModPessoa"
                        onClick={toggleModal}
                      >
                        001
                        <label className="GroupTipObs">
                          GRUPO DE QUESTÕES
                        </label>{' '}
                      </button>
                    </td>

                    <td className="btnSubTipObsQualiObs">
                      <Link to="/tipoQualidadeDeObservacao">
                        <button className="btnPageGroupQuest">AÇAO JTI</button>
                      </Link>
                    </td>
                    <td className="btnSubTipObsfator1">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsfator2">
                      <label htmlFor="">13</label>
                    </td>
                    <td className="btnSubTipObsfatorN">
                      <label htmlFor="">1</label>
                    </td>
                    <td className="btnSubTipObsPermissao">
                      <label htmlFor=""></label>
                    </td>
                    <td className="btnSubTipObsAtivo">
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
        </div>{' '}
        {/* =================================================================== */}
        {modal && (
          <div className="NovoTipoDeobservacao">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="NovoTipoDeobservacao-content">
              <h2 className="titleModal">
                Alterar Tipo de Observação
                <hr className="hrTitleModal" />
              </h2>
              <input
                className="NTODescricao"
                placeholder="Descrição"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <label className="NTOFatores">
                Fatores para cálculo de resultado final da observação:
              </label>
              <label className="TQOTittlePositivo">Positivo:</label>
              <input
                className="NTOPositivo"
                placeholder="Nº"
                id="fname"
                name="fname"
              ></input>
              <label className="TQOTittleNegativo">Negativo:</label>
              <input
                className="NTONegativo"
                placeholder="Nº"
                id="fname"
                name="fname"
              ></input>
              <label className="TQOTittleNeutro">Neutro:</label>
              <input
                className="NTONeutro"
                placeholder="Nº"
                id="fname"
                name="fname"
              ></input>

              <textarea
                className="NTOOBS"
                placeholder="Observações"
                id="fname"
                name="fname"
                maxLength={500}
              ></textarea>

              <div className="NTOCheckPermitir">
                <input
                  className="NTOCheckPermitir1"
                  type="checkbox"
                  placeholder=""
                  defaultChecked={false}
                />
                <label className="NTOCheckPermitir2">
                  Permitir resposta NÃO APLICADO no APP
                </label>
              </div>

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
      </ContainerPage>
    </div>
  )
}

export default SubMenuTipoDeObservacao
