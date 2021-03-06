import { useHistory } from 'react-router-dom'
import '../../../../styles/SubMenuPages/SubMenuGruposUsuarios/pages-GruposDeUsuario/PermissoesDeAcessoAoSistema.css'

import * as TypIcons from 'react-icons/ti'
import ProfileDireita from '../../../../components/ProfileDireita'
import SidebarMobile from '../../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { ContainerPage, TitlePage4 } from '../../../../components/Main'
import { NavDireita } from '../../../../components/SideBar/Index'

function PermissoesDeAcessoAoSistema() {
  let history = useHistory()
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
        <div className="page">
          <div className="filter1">
            <TitlePage4>
              Permissões de Acesso ao Sistema - Grupo: Avaliadores
            </TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
                <table>
                  <thead>
                    <tr className="header">
                      <th>
                        <div>CÓD</div>
                      </th>
                      <th>
                        <div>Permissão</div>
                      </th>
                      <th>
                        <div>Módulo</div>
                      </th>
                      <th>
                        <div>Descrição</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="tblPASCod">1 </td>
                    <td className="tblPASQuests">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="tblPASGroupAnalise">ACESSO</td>
                    <td className="tblPASDescr">Menu Acesso</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">2 </td>
                    <td className="tblPASQuests">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="tblPASGroupAnalise">ACEUSU</td>
                    <td className="tblPASDescr">Acesso ao Usuário</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">3 </td>
                    <td className="tblPASQuests">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="tblPASGroupAnalise">ACEGRU</td>
                    <td className="tblPASDescr">Acesso ao Grupo De Usuários</td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">4 </td>
                    <td className="tblPASQuests">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="tblPASGroupAnalise">ACEMOD</td>
                    <td className="tblPASDescr">
                      Acesso ao Cadastro de Módulos
                    </td>
                  </tbody>
                  <tbody>
                    <td className="tblPASCod">5 </td>
                    <td className="tblPASQuests">
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
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
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
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

export default PermissoesDeAcessoAoSistema
