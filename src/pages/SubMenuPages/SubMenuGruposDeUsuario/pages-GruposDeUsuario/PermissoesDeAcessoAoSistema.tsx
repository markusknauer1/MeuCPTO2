import { Link } from 'react-router-dom'
import '../../../../styles/SubMenuPages/SubMenuGruposUsuarios/pages-GruposDeUsuario/PermissoesDeAcessoAoSistema.css'

import * as TypIcons from 'react-icons/ti'
import { SideBar } from '../../../../components/SideBar/Index'
import ProfileDireita from '../../../../components/ProfileDireita'
import SidebarMobile from '../../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage } from '../../../../components/Main'

function PermissoesDeAcessoAoSistema() {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
        <div className="logo" />
        <Link to="/SubMenuGruposUsuarios">
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
        <SideBar />
        <div className="page">
          <div className="filter1">
            <h2 className="tittlePASObserv">
              Permissões de Acesso ao Sistema - Grupo: Avaliadores{' '}
            </h2>
          </div>
          <div className="tabelaPadrao2">
            <section className="">
              <div className="container">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="PASCod">
                        <div>CÓD</div>
                      </th>
                      <th className="PASQuests">
                        <div>Permissão</div>
                      </th>
                      <th className="PASGroupAnalise">
                        <div>Módulo</div>
                      </th>
                      <th className="PASDescr">
                        <div>Descrição</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <i className="fas fa-check-circle"></i>
                    </td>
                    <td className="tblPASGroupAnalise">ACESSO</td>
                    <td className="tblPASDescr">Menu Acesso</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <i className="fas fa-check-circle"></i>
                    </td>
                    <td className="tblPASGroupAnalise">ACEUSU</td>
                    <td className="tblPASDescr">Acesso ao Usuário</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <i className="fas fa-check-circle"></i>
                    </td>
                    <td className="tblPASGroupAnalise">ACEGRU</td>
                    <td className="tblPASDescr">Acesso ao Grupo De Usuários</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <i className="fas fa-check-circle"></i>
                    </td>
                    <td className="tblPASGroupAnalise">ACEMOD</td>
                    <td className="tblPASDescr">
                      Acesso ao Cadastro de Módulos
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <i className="fas fa-check-circle"></i>
                    </td>
                    <td className="tblPASGroupAnalise">ACEGRUINC</td>
                    <td className="tblPASDescr">
                      Cadastrar Novos Grupos De Usuários
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <ProfileDireita />
        <div className="buttonProfileDireita"></div>
        <SidebarMobile />
      </ContainerPage>
    </div>
  )
}

export default PermissoesDeAcessoAoSistema
