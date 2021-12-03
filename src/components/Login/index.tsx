import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../components/Login/index.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show] = useState(false)

  return (
    <div className="login">
      <div className="bg1" />
      <div className="bg2" />

      <div className="login-right">
        <h3 className="title">Valorização da vida em tempo real</h3>

        <hr className="hrLogin" />

        <div className="login-loginEmail">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="login-loginPassword">
          <input
            placeholder="Senha"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Link to="/Home">
          <button className="enter-app">Entrar</button>
        </Link>

        <label className="recordPassword">
          <input
            className="checkBoxMemorizer"
            type="checkbox"
            placeholder="Lembrar senha!"
            defaultChecked={false}
          />
          <span className="spnCheckBox">Memorizar senha</span>
        </label>
        <button className="btnrecovery">Esqueci a senha</button>
      </div>
      <div className="bg3" />
    </div>
  )
}

export default Login
