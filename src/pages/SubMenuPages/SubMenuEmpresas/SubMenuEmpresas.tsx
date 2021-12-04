import { ContainerPage, TitlePage4 } from '../../../components/Main'
import ProfileDireita from '../../../components/ProfileDireita'
import SidebarMobile from '../../../components/SideBar-navegaçao-direita/SidebarMobile'
import { NavDireita } from '../../../components/SideBar/Index'
import '../../../styles/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas.css'
import Modal from './modal-Empresas/AlterarRegistroEmpresas'

function SubMenuEmpresas() {
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
            id="fname1"
            name="fname"
          />
          <Modal />
        </div>
        <div className="page">
          <div className="filter1">
            <TitlePage4>Cadastro Geral de Empresas</TitlePage4>
          </div>
          <div className="tabelaPadrao">
            <section className="">
              <div className="containerPadrao">
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
        <div className="buttonProfileDireita">
          <NavDireita />
        </div>
        <SidebarMobile />
      </ContainerPage>
    </div>
  )
}

export default SubMenuEmpresas
