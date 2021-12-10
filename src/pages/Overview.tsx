import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import accomplished from '../Images/ok.svg'
import GraphImg from '../Images/Graph.svg'
import wrong from '../Images/wrong.svg'
import pending from '../Images/pending.svg'
import logoK from '../Images/logoK.png'

import logoKlabim from '../Images/logoK.png'
import {
  ContainerPage,
  TitlePage1,
  TitlePage2,
  TitlePage3
} from '../components/Main'
import ProfileDireita from '../components/ProfileDireita'
import '../styles/components/Calendar.css'
import Calendar from '../components/Calendar'
import { NavDireita } from '../components/SideBar/Index'
import ModalPessoa from './MenuDireito/MenuDireito-Modal/ModalCadPessoa'
import SidebarMobile from '../components/SideBar-navegaçao-direita/SidebarMobile'

export const Home: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <div className="page">
          <div className="filter1">
            <img className="logoK" src={logoKlabim} alt="LogoK" />
            <TitlePage1>PÁGINA INICIAL</TitlePage1>
            <TitlePage2>Resultado do ICS</TitlePage2>
            <TitlePage3>Índice de Comportamento Seguro</TitlePage3>
          </div>

          <div className="tabelaPadraoICS">
            <div>
              <Link className="ICS1" to="/UniClienteExe">
                <img className="statusRel1" src={pending} alt="pending" />
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS2" to="/UniClienteExe">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label className="FuncaoResultado">90.05%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  90.05%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS3" to="/UniClienteExe">
                <img className="statusRel" src={wrong} alt="wrong" />
                <label className="FuncaoResultado">86.00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  86.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS4" to="/UniClienteExe">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label className="FuncaoResultado">93,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  93.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS5" to="/UniClienteExe">
                <img className="statusRel" src={wrong} alt="wrong" />
                <label className="FuncaoResultado">00,03%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.03%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS6" to="/UniClienteExe">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label className="FuncaoResultado">95,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  95.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS7" to="/UniClienteExe">
                <img className="statusRel" src={wrong} alt="wrong" />
                <label className="FuncaoResultado">00,54%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  00.54%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS8" to="/UniClienteExe">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label className="FuncaoResultado">98,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  98.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>

            <div>
              <Link className="ICS9" to="/UniClienteExe">
                <img className="statusRel" src={wrong} alt="wrong" />
                <label className="FuncaoResultado">80,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  90.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  80.00%
                </label>
                <label className="locale">Unidade</label>
              </Link>
            </div>
          </div>
          <div className="cxLegenda">
            <label htmlFor="" className="lgLegenda">
              Legenda:
            </label>
            <button className="lgAcima">
              <img className="okImg" src={accomplished} alt="" />{' '}
              <label className="lbllgAcima">Acima da Média</label>
            </button>
            <button className="lgMedia">
              <img className="GraphImg" src={GraphImg} alt="" /> Média
            </button>
            <button className="lgAbaixo">
              <img className="wrongImg" src={wrong} alt="" />
              Abaixo da Média
            </button>
          </div>
        </div>
        <aside className="calendarRelatorio1">
          <h1 className="selectAnalise">Selecione:</h1>
          <form action="">
            <label className="SelectCliente" htmlFor="">
              Cliente/Unidade:
            </label>
            <select name="SelectIdCliente" className="SelectIdCliente">
              <option value="">Unidade</option>
              <option value="">Unidade</option>
              <option value="">Unidade</option>
              <option value="">Unidade</option>
            </select>
          </form>
          <form action="">
            <label className="SelectObserv" htmlFor="">
              Tipo de Observação:
            </label>
            <select name="SelectIdObserv" className="SelectIdObserv">
              <option value="">Unidade</option>
              <option value="">Unidade</option>
              <option value="">Unidade</option>
              <option value="">Unidade</option>
            </select>
            <label className="SelectDate">Periodo Analisado:</label>

            <div className="calendarioAnalise1">
              <Calendar calendarType="Hebrew" selectRange />
            </div>
          </form>
        </aside>
      </ContainerPage>
    </div>
  )
}

export const FormularioCadastro: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <NavDireita />
        <div className="logo" />
        <img className="logoKmobile" src={logoK} alt="LogoEmpresa" />

        <div className="page">
          <div className="filter1">
            <TitlePage1>UNIDADES:</TitlePage1>
            <TitlePage2>Unidade Registrada (Produção)</TitlePage2>
            <TitlePage3>Dados Cadastrais:</TitlePage3>
          </div>
          <div className="tabelaPadraoCad">
            <p className="titulo1">Nome Fantasia</p>
            <input
              className="fcadastro1"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo2">CNPJ</p>
            <input
              className="fcadastro2"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo3">Segmento</p>
            <input
              className="fcadastro3"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo4">CEP</p>
            <input
              className="fcadastro4"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo5">Número</p>
            <input
              className="fcadastro5"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo6">Bairro</p>
            <input
              className="fcadastro6"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>

            <p className="titulo7">Razão Social</p>
            <input
              className="fcadastro7"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo8">Inscrição Estadual</p>
            <input
              className="fcadastro8"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo9">Responsável</p>
            <input
              className="fcadastro9"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo10">Endereço</p>
            <input
              className="fcadastro10"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo11">Complemento</p>
            <input
              className="fcadastro11"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo12">Cidade</p>
            <input
              className="fcadastro12"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
            <p className="titulo13">Estado</p>
            <input
              className="fcadastro13"
              type="text"
              autoComplete="none"
              id="fname"
              name="fname"
            ></input>
          </div>
        </div>
        <nav>
          <Link to="/FormularioCadastro">
            <button className="buttonSave">Salvar</button>
          </Link>
        </nav>
      </ContainerPage>
    </div>
  )
}

export const Pessoas: FC = () => {
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
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fname1"
          name="fname"
        />
        <ModalPessoa />
        <div className="filter1">
          <TitlePage1>DADOS CADASTRAIS / NOVA PESSOA:</TitlePage1>
          <TitlePage2>Gerentes/Operadores</TitlePage2>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="containerPadrao">
              <table>
                <thead>
                  <tr className="header">
                    <th className="ttlPessoacod">
                      <div>CÓD</div>
                    </th>
                    <th className="ttlPessoaObservador">
                      <div>Observador</div>
                    </th>
                    <th className="tttPessoalogin">
                      <div>E-Mail/login</div>
                    </th>
                    <th className="ttlPessoaFuncao">
                      <div>Função</div>
                    </th>
                    <th className="ttlPessoaMetas">
                      <div>Metas</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblPesCod">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      001
                    </button>
                  </td>
                  <td className="tblPesOBS">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Nome do Funcionário
                    </button>
                  </td>
                  <td className="tblPesMail">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      cpto@cpto.com.br
                    </button>
                  </td>
                  <td className="tblPesFunc">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Supervisão
                    </button>
                  </td>
                  <td className="tblPesMetas">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblPesCod">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      001
                    </button>
                  </td>
                  <td className="tblPesOBS">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Nome do Funcionário
                    </button>
                  </td>
                  <td className="tblPesMail">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      cpto@cpto.com.br
                    </button>
                  </td>
                  <td className="tblPesFunc">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      Supervisão
                    </button>
                  </td>
                  <td className="tblPesMetas">
                    <button className="altInfoModPessoa" onClick={toggleModal}>
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>

                {/* ===============================Modal Alterar Informação da lista============================ */}
                {modal && (
                  <div className="modalPessoa">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modalPessoa-content">
                      <h2 className="titleModal">Alterar Pessoa</h2>
                      <hr className="hrTitleModal" />

                      <div className="formCadModal">
                        <input
                          className="fcadastroPessoa1"
                          placeholder="Nome"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <select
                          className="fcadastroPessoa2"
                          name="Sexo"
                          id="fSexo"
                        >
                          <option value="">Sexo</option>
                          <option value="">Feminio</option>
                          <option value="">Masculino</option>
                        </select>
                        <input
                          className="fcadastroPessoa3"
                          id="date"
                          type="date"
                        />

                        <select
                          name="Função"
                          className="fcadastroPessoa4"
                          id="fcontexto"
                        >
                          <option value="">Função - Teste 1</option>
                          <option value="">Função - Teste 2</option>
                          <option value="">Função - Teste 3</option>
                        </select>

                        <input
                          className="fcadastroPessoa5"
                          placeholder="E-Mail"
                          type="text"
                          id="mail"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa6"
                          placeholder="Telefone"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa7"
                          placeholder="Celular"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa8"
                          placeholder="CEP"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <button className="consulltaCep">
                          <i className="fas fa-search"></i>
                        </button>
                        <input
                          className="fcadastroPessoa9"
                          placeholder="Endereço"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa10"
                          placeholder="Número"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa11"
                          placeholder="Complemento"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa12"
                          placeholder="Bairro"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa13"
                          placeholder="Cidade"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa14"
                          placeholder="Estado"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa15"
                          placeholder="Observações"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                          maxLength={500}
                        />
                        <input
                          className="fcadastroPessoa16"
                          placeholder="Senha"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa17"
                          placeholder="Confirmar Senha"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                        <input
                          className="fcadastroPessoa18"
                          placeholder="Grupo"
                          type="text"
                          id="fname"
                          name="fname"
                          autoComplete="none"
                        />
                      </div>
                      <div className="InputAuthorization1">
                        <label>
                          <input
                            className="CheckAcess1"
                            type="checkbox"
                            defaultChecked={false}
                          />

                          <span className="checkText">Acesso ao APP</span>
                        </label>{' '}
                      </div>
                      <br />
                      <div className="InputAuthorization2">
                        <label>
                          <input
                            className="CheckAcess2"
                            type="checkbox"
                            defaultChecked={false}
                          />
                          <span className="checkText">Acesso Web</span>
                        </label>
                      </div>

                      <button className="close-modal" onClick={toggleModal}>
                        X
                      </button>

                      <button
                        onClick={toggleModal}
                        type="submit"
                        className="gravar-modal"
                      >
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

export const Relatorio: FC = () => {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <form action="">
          <label className="SelectUnidade1" htmlFor="">
            Selecione a Unidade:
          </label>

          <select name="Empresas" className="SelectUnidade2">
            <option className="select" value="">
              Unidade
            </option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
          </select>
        </form>

        <div className="page">
          <TitlePage1>UNIDADES / RELATÓRIO:</TitlePage1>
          <Link to="/Home">
            <TitlePage2>Metas para Março</TitlePage2>
          </Link>

          <div className="Metas">
            <Link to="/Home">
              <button className="metas1">
                <label htmlFor="" className="tittleMeta2">
                  Qualidade da Observação:
                </label>
                <hr className="hrMeta1" />
                <label htmlFor="" className="estimativa">
                  0
                </label>
                <label htmlFor="" className="realidade">
                  3
                </label>
                <img src={pending} className="pending" alt="Concluida" />
                <label htmlFor="" className="Conclusao1">
                  Pendente
                </label>
              </button>
            </Link>

            <Link to="/Home">
              <button className="metas2">
                <label className="tittleMeta">Observação Comportamental:</label>
                <hr className="hrMeta" />
                <label htmlFor="" className="estimativa">
                  5
                </label>

                <label htmlFor="" className="realidade">
                  5
                </label>
                <img
                  src={accomplished}
                  className="ConclusaoOk"
                  alt="Concluida"
                />
                <label htmlFor="" className="Conclusao1">
                  Concluída
                </label>
              </button>
            </Link>

            <Link to="/Home">
              <button className="metas3">
                <label className="tittleMeta">
                  Diálogo Diário de Segurança(DDS):
                </label>
                <hr className="hrMeta" />
                <label htmlFor="" className="estimativa">
                  1
                </label>
                <label htmlFor="" className="realidade">
                  3
                </label>
                <img src={wrong} className="ConclusaoWrong" alt="Concluida" />
                <label htmlFor="" className="Conclusao2">
                  Não Concluída
                </label>
              </button>
            </Link>
            <Link to="/Home">
              <button className="metas4">
                <label htmlFor="" className="tittleMeta2">
                  Qualidade da Observação:
                </label>
                <hr className="hrMeta1" />
                <label htmlFor="" className="estimativa">
                  0
                </label>
                <label htmlFor="" className="realidade">
                  3
                </label>
                <img src={pending} className="pending" alt="Concluida" />
                <label htmlFor="" className="Conclusao1">
                  Pendente
                </label>
              </button>
            </Link>
            <Link to="/Home">
              <button className="metas5">
                <label htmlFor="" className="tittleMeta2">
                  Qualidade da Observação:
                </label>
                <hr className="hrMeta1" />
                <label htmlFor="" className="estimativa">
                  0
                </label>
                <label htmlFor="" className="realidade">
                  3
                </label>
                <img src={pending} className="pending" alt="Concluida" />
                <label htmlFor="" className="Conclusao1">
                  Pendente
                </label>
              </button>
            </Link>

            <Link to="/Home">
              <button className="metas6">
                <label className="tittleMeta3 ">
                  Resultado Geral
                  <br /> do ICS:
                </label>
                <img src={pending} className="pending1" alt="Concluida" />
                <label htmlFor="" className="resultGeral">
                  00,00%
                </label>
              </button>
            </Link>

            <Link to="/Home">
              <button className="metas7">
                <label className="tittleMeta3">
                  Resultado Geral
                  <br /> do ICS:
                </label>
                <img src={pending} className="pending1" alt="Concluida" />
                <label htmlFor="" className="resultGeral">
                  00,00%
                </label>
              </button>
            </Link>
            <Link to="/Home">
              <button className="MetaHome">
                <label className="graph">
                  Incidência de Ativadores da unidade no mês
                </label>
              </button>
            </Link>
          </div>
        </div>
        <aside className="calendarRelatorio2">
          <div className="calendarioAnalise2">
            <Calendar calendarType="Hebrew" selectRange />
          </div>
        </aside>
      </ContainerPage>
    </div>
  )
}
