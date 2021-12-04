import { useState } from 'react'
import '../SideBar-navegaçao-direita/SidebarMobile.css'

import logologo from '../../components/logoIniciativaAzul@2x.png'

import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

import logo from '../../Images/logoMeuCptoHorizBranco.png'

function SidebarMobile() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: 'hsl(0, 0%, 100%)' }}>
        <div className="navbar">
          <button onClick={showSidebar} className="NavButtomDireita"></button>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            {/* logoSuperior */}
            <img className="Moblogo" src={logo} alt="logo" />
            {/* --- */}
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <div className="close-background"></div>
                <aside className="MobileProfileDireita">
                  <Link to="/SubMenuEmpresas">
                    <button className="Mobwork">Empresas</button>
                  </Link>
                  <Link to="/SubMenuTipoDeObservacao">
                    <button className="MobtypObs">Tipo de Observação</button>
                  </Link>
                  <Link to="/SubMenuTextActive">
                    <button className="MobTextActiv">Textos Ativadores</button>
                  </Link>
                  <Link to="/SubMenuPessoas">
                    <button className="MobpeopleTest">Pessoas</button>
                  </Link>
                  <Link to="/SubMenuGruposUsuarios">
                    <button className="MobUserGroup">Grupos de Usuários</button>
                  </Link>
                </aside>
              </li>
            </ul>
            <div>
              <img className="Moblogologo" src={logologo} alt="logo" />
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default SidebarMobile
