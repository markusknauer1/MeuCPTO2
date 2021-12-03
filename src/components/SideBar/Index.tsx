import { FC } from 'react'

import { Link } from 'react-router-dom'
import { AreaSidebar, MenuProfileDireita } from './styled'

import graph from '../../Images/Graph.svg'
import Pessoas from '../../Images/Pessoas.svg'
import Pointer from '../../Images/pointer.svg'
import Home from '../../Images/Home.svg'
import Logout from '../../Images/Logout.svg'
import background from '../../Images/background.svg'

export const SideBar: FC = () => {
  return (
    <AreaSidebar>
      <div className="containerBackground">
        <img src={background} alt="relatorio" width="250%" height="250%" />
      </div>
      <div className="containerMenu">
        <nav>
          <ul className="menus">
            {/* <div className="slider"></div> */}
            <li>
              <Link to="/Home">
                <div>
                  <img src={Home} width="100%" height="100%" alt="relatorio" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/FormularioCadastro">
                <div>
                  <img
                    src={Pointer}
                    width="100%"
                    height="100%"
                    alt="relatorio"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Pessoas">
                <div>
                  <img
                    src={Pessoas}
                    width="100%"
                    height="100%"
                    alt="relatorio"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Relatorio">
                <div>
                  <img src={graph} width="100%" height="100%" alt="relatorio" />
                </div>
              </Link>
            </li>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <li className="Desconect">
              <Link to="/">
                <div>
                  <img
                    src={Logout}
                    width="100%"
                    height="100%"
                    alt="desconectar"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </AreaSidebar>
  )
}
export const NavDireita: FC = () => {
  return (
    <MenuProfileDireita>
      <div className="containerMenuDireito">
        <nav>
          <ul className="MenuDireita">
            <li>
              {' '}
              <Link to="/FormularioCadastro">
                <button className="tttlBtnNav1">Dados Cadastrais</button>
              </Link>
            </li>
            <li>
              <Link to="/Unidades">
                <button className="tttlBtnNav2">Contatos da Unidade</button>
              </Link>
            </li>
            <li>
              <Link to="/Pessoas">
                <button className="tttlBtnNav3">Pessoas</button>
              </Link>
            </li>
            <li>
              <Link to="/Equipes">
                <button className="tttlBtnNav4">Equipes</button>
              </Link>
            </li>
            <li>
              <Link to="/Gerencias">
                <button className="tttlBtnNav5">Gerências</button>
              </Link>
            </li>
            <li>
              <Link to="/Atividades">
                <button className="tttlBtnNav6">Atividades</button>
              </Link>
            </li>
            <li>
              <Link to="/Area">
                <button className="tttlBtnNav7">Áreas</button>
              </Link>
            </li>
            <li>
              <Link to="/Observacoes">
                <button className="tttlBtnNav8">Observações</button>
              </Link>
            </li>
            <li>
              <Link to="/Relatorio">
                <button className="tttlBtnNav9">Dashboard ICS</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </MenuProfileDireita>
  )
}
