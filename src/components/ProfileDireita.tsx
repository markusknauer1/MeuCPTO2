import React from 'react'
import 'react-calendar/dist/Calendar.css'
import logo1 from '../Images/perflAlex.png'
import logologo from '../components/logoIniciativaAzul@2x.png'
import '../styles/components/profiledireita.css'
import { Link } from 'react-router-dom'
import containerBackgroundProfile from '../Images/background.svg'

function ProfileDireita() {
  return (
    <div className="Profile-direita">
      <img
        className="containerBackgroundProfile"
        src={containerBackgroundProfile}
        alt=""
      />
      <div>
        <h6 className="titleProfile1">Seja Muito Bem-vindo,</h6>
      </div>
      <div>
        <h6 className="titleProfile2">João da Silva</h6>
      </div>

      <div className="cxProfile">
        <img className="logo1" src={logo1} alt="logo" />
        <Link to="/Home">
          <button className="profile-profileEditor">Ver perfil</button>
        </Link>
      </div>
      <img className="logologo" src={logologo} alt="logo" />
    </div>
  )
}

export default ProfileDireita
