import { ContainerPage, TitlePage2 } from '../../../components/Main'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { SideBar } from '../../../components/SideBar/Index'
import '../../../styles/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas.css'
import Modal from './modal-Empresas/AlterarRegistroEmpresas'

function SubMenuEmpresas() {
  return (
    <div className="logoQ1">
      <ProfileDireita />
      <ContainerPage>
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
        <SideBar />
        <div className="page">
          <div className="filter1">
            <TitlePage2>Cadastro Geral de Empresas</TitlePage2>
          </div>
          <div className="tabelaPadrao2">
            <section className="">
              <div className="container">
                <table>
                  <thead>
                    <tr className="header">
                      <th className="tblSubEmpresaCod">
                        <div>Código</div>
                      </th>
                      <th className="tblSubEmpresaEmpresa">
                        <div>Empresa</div>
                      </th>
                      <th className="tblSubEmpresaAtivo">
                        <div>Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
                    </td>
                  </tbody>
                  <tbody>
                    <td className="btnSubEmpresaCod">01</td>
                    <td className="btnSubEmpresaOBS">Humanit-TI</td>
                    <td className="btnSubEmpresaAtivo">
                      <i className="fas fa-check-circle"></i>
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

export default SubMenuEmpresas
