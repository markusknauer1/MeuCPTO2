import { Link } from 'react-router-dom'
import '../../styles/ModalObservações/ModalUnidades.css'
import ProfileDireita from '../../components/ProfileDireita'
import { ContainerPage, TitlePage1, TitlePage2 } from '../../components/Main'
import InfoUnidade from './InfoUnidade'
import SidebarMobile from '../../components/SideBar-navegaçao-direita/SidebarMobile'

function ObservCpto() {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <SidebarMobile />
      <ContainerPage>
        <div className="logo" />
        <input
          className="fnameObservCpto"
          placeholder="Pesquisar"
          type="text"
          id="fname1"
          name="fname"
        />
        <div className="filter1">
          <TitlePage1>RELATÓRIO / UNIDADES: </TitlePage1>
          <TitlePage2>Observação Comportamental</TitlePage2>
        </div>
        <InfoUnidade />
        <div>
          <button className="observComp">
            <label htmlFor="">Comportamento Seguro</label>
            <label htmlFor="" className="indiceTotal">
              100,00%
            </label>
          </button>

          <h3 className="subtObservCPTO3">Detalhes da Observação</h3>
          <div className="CxFilter">
            <label htmlFor="" className="filterList">
              {' '}
              filtro:
            </label>
            <Link to="">
              <button className="filterList1">
                <i className="far fa-laugh-beam"></i>
              </button>
            </Link>
            <Link to="">
              <button className="filterList2">
                <i className="far fa-meh"></i>
              </button>
            </Link>
            <Link to="">
              <button className="filterList3">
                <i className="far fa-frown"></i>
              </button>
            </Link>
          </div>
        </div>{' '}
        <div className="ObservFeitas">
          <section className="">
            <div className="ContainerObservCptop">
              <table>
                <thead>
                  <tr className="header">
                    <th className="btnGroup">
                      <div>Grupo</div>
                    </th>
                    <th className="btnQuest">
                      <div>Questão</div>
                    </th>
                    <th className="btnActivit">
                      <div>Atividade</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblObsCod">001</td>
                  <td className="tblGroup">TESTE</td>
                  <td className="tblQuest">TESTE</td>
                  <td className="tblActivit">Gerência</td>
                  <td className="tblFilter">
                    <i className="far fa-laugh-beam"></i>
                  </td>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </ContainerPage>
    </div>
  )
}

export default ObservCpto

{
  /* 
<InfoUnidade />
                <tbody>
                <td className="tblObsCod">001</td>
                <td className="tblGroup">TESTE</td>
                <td className="tblQuest">TESTE</td>
                <td className="tblActivit">Gerência</td>
                <td className="tblFilter">
                  <i className="far fa-laugh-beam"></i>
                </td>
                  </td>
                </tbody> */
}

{
  /* <tr className="header">
   */
}

{
  /* <div>
            <h4 className="subtObservCPTO1"> </h4>
            <h2 className="subtObservCPTO2"></h2>
          </div>
          <div>
            <button className="observComp">
              <label htmlFor="">Comportamento Seguro</label>
              <label htmlFor="" className="indiceTotal">
                100,00%
              </label>
            </button>

            <h3 className="subtObservCPTO3">Detalhes da Observação</h3>
            <label htmlFor="" className="filterList">
              {' '}
              filtro:
            </label>
            <Link to="">
              <button className="filterList1">
                <i className="far fa-laugh-beam"></i>
              </button>
            </Link>
            <Link to="">
              <button className="filterList2">
                <i className="far fa-meh"></i>
              </button>
            </Link>
            <Link to="">
              <button className="filterList3">
                <i className="far fa-frown"></i>
              </button>
            </Link>
          </div> */
}
