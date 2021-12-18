import { Link, useHistory } from 'react-router-dom'
import '../../styles/ModalObservações/UniClienteExe.css'
import * as TypIcons from 'react-icons/ti'
import accomplished from '../../Images/ok.svg'
import GraphImg from '../../Images/Graph.svg'
import wrong from '../../Images/wrong.svg'
import Calendar from 'react-calendar'
import Modal from './ModalObservações/ModalObsUnidades'
import ProfileDireita from '../../components/ProfileDireita'
import {
  ContainerPage,
  TitlePage1,
  TitlePage2,
  TitlePage3
} from '../../components/Main'
import SidebarMobile from '../../components/SideBar-navegaçao-direita/SidebarMobile'
import { FC } from 'react'
import logoHumaniTI from '../../Images/LogoHumani-TI.svg'

export const UniClienteExe: FC = () => {
  let history = useHistory()
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>
        <div className="page">
          <div className="filter1">
            <TitlePage1>RELATÓRIO / UNIDADES:</TitlePage1>
            <TitlePage2>Humanit-TI</TitlePage2>
            <TitlePage3>
              Observações realizadas:
              <label className="subtRel3">0</label>
            </TitlePage3>
            <img className="logoK" src={logoHumaniTI} alt="" />
          </div>
          <div className="tabelaPadraoICS">
            <button className="relProjetado">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="TittleProjetadoAcumulado">
                Projetado:
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>

            <button className="relAcumulado">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="TittleProjetadoAcumulado">
                Acumulado:
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>

            <label htmlFor="" className="TittleIndice">
              Resultado por Mês da Empresa:
            </label>
            <Link to="/UniClieSetor">
              <button className="UniClienteMes1">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Outubro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes2">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Novembro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes3">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Dezembro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes4">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Janeiro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes5">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Fevereiro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes6">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Março
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes7">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Abril
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes8">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Maio
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniClieSetor">
              <button className="UniClienteMes9">
                <img
                  className="statusRel"
                  src={accomplished}
                  alt="accomplished"
                />
                <label htmlFor="" className="TittleMes">
                  Junho
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>
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
          <h1 className="selectAnalise1">Resultado do IQO</h1>
          <h2 className="selectAnalise2">Índice de qualidade da observação</h2>
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
        <Modal />
        {/* <SidebarMobile /> */}
      </ContainerPage>
    </div>
  )
}
export const UniClieSetor: FC = () => {
  let history = useHistory()
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>

        <div className="filter1">
          <TitlePage1>RELATÓRIO / UNIDADES:</TitlePage1>
          <TitlePage2>Humanit-TI</TitlePage2>
          <img className="logoK" src={logoHumaniTI} alt="" />
          <TitlePage3>
            Observações realizadas:
            <label className="subtRel3">0</label>
          </TitlePage3>
        </div>
        <div className="tabelaPadraoICS">
          <button className="relProjetado">
            <img className="statusRel" src={accomplished} alt="okImg" />
            <label htmlFor="" className="TittleProjetadoAcumulado">
              Projetado:
            </label>
            <label className="FuncaoResultado">00,00%</label>
            <label className="FuncaoMeta">
              Meta:
              <br />
              0.00%
            </label>
            <hr className="hrICS" />
            <label className="FuncaoReal">
              Real:
              <br />
              0.00%
            </label>
          </button>

          <button className="relAcumulado">
            <img className="statusRel" src={accomplished} alt="okImg" />
            <label htmlFor="" className="TittleProjetadoAcumulado">
              Acumulado:
            </label>
            <label className="FuncaoResultado">00,00%</label>
            <label className="FuncaoMeta">
              Meta:
              <br />
              0.00%
            </label>{' '}
            <hr className="hrICS" />
            <label className="FuncaoReal">
              Real:
              <br />
              0.00%
            </label>
          </button>

          <label htmlFor="" className="TittleIndice">
            Resultado por setor da Empresa:
          </label>

          <Link to="/MesSetor">
            <button className="UniClienteSetor1">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor2">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor3">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor4">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor5">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor6">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor7">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor8">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>

          <Link to="/MesSetor">
            <button className="UniClienteSetor9">
              <img className="statusRel" src={accomplished} alt="okImg" />
              <label htmlFor="" className="tittleUniSetor">
                Setor
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>
          </Link>
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
        <div className="ICSgraph"></div>
        <aside className="calendarRelatorio1">
          <h1 className="selectAnalise1">Resultado do IQO</h1>
          <h2 className="selectAnalise2">Índice de qualidade da observação</h2>
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
        <Modal />
      </ContainerPage>
    </div>
  )
}
export const MesSetor: FC = () => {
  let history = useHistory()
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>

        <div className="page">
          <div className="filter1">
            <TitlePage1>RELATÓRIO / UNIDADES:</TitlePage1>
            <TitlePage2>Humanit-TI</TitlePage2>
            <img className="logoK" src={logoHumaniTI} alt="" />
            <TitlePage3>
              Observações realizadas:
              <label className="subtRel3">0</label>
            </TitlePage3>
          </div>
          <div className="tabelaPadraoICS">
            <Link to="/UniClieSetor">
              <button className="relProjetado">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleProjetadoAcumulado">
                  Projetado:
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>
            <Link to="/UniClieSetor">
              <button className="relAcumulado">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleProjetadoAcumulado">
                  Acumulado:
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>{' '}
                <hr className="hrICS" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <label htmlFor="" className="TittleIndice">
              Resultado por Mês/Setor da Empresa:
            </label>

            <Link to="/UniContribSetor">
              <button className="mesSetor1">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Outubro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor2">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Novembro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor3">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Dezembro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor4">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Janeiro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor5">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Fevereiro
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor6">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Março
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor7">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Abril
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor8">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Maio
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>

            <Link to="/UniContribSetor">
              <button className="mesSetor9">
                <img className="statusRel" src={accomplished} alt="okImg" />
                <label htmlFor="" className="TittleMes">
                  Junho
                </label>
                <label className="FuncaoResultado">00,00%</label>
                <label className="FuncaoMeta">
                  Meta:
                  <br />
                  0.00%
                </label>
                <hr className="hr" />
                <label className="FuncaoReal">
                  Real:
                  <br />
                  0.00%
                </label>
              </button>
            </Link>
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
          <h1 className="selectAnalise1">Resultado do IQO</h1>
          <h2 className="selectAnalise2">Índice de qualidade da observação</h2>
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
        <Modal />
      </ContainerPage>
    </div>
  )
}
export const UniContribSetor: FC = () => {
  let history = useHistory()
  return (
    <div className="logoQ1">
      <ProfileDireita />

      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>

        <Modal />
        <div className="page">
          <div className="filter1">
            <TitlePage1>RELATÓRIO / UNIDADES:</TitlePage1>
            <TitlePage2>Humanit-TI</TitlePage2>
            <img className="logoK" src={logoHumaniTI} alt="" />
            <TitlePage3>
              Observações realizadas:
              <label className="subtRel3">0</label>
            </TitlePage3>
          </div>
          <div className="tabelaPadraoICS">
            <button className="UniClienteICS">
              <label htmlFor="" className="tittleICS">
                ICS
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>

            <button className="UniClienteProAtivo">
              <label htmlFor="" className="tittleProativo">
                ProAtivo
              </label>
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
            </button>

            <button className="ICSUnidadegraph">
              <label htmlFor="" className="tittleICSRel">
                Incidência de Ativadores da Unidade no mês
              </label>
            </button>
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
          <h1 className="selectAnalise1">Resultado do IQO</h1>
          <h2 className="selectAnalise2">Índice de qualidade da observação</h2>
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
