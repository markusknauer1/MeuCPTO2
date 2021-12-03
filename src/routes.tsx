import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import {
  FormularioCadastro,
  Home,
  Pessoas,
  Relatorio
} from '../src/pages/Overview'
import {
  Area,
  Atividades,
  Equipes,
  Gerencias,
  Observacoes,
  Unidades
} from './pages/pagesNavDireita'
import ObservCpto from './pages/DetalhesDaObservação/ObservCpto'
import {
  MesSetor,
  UniClienteExe,
  UniClieSetor,
  UniContribSetor
} from './pages/UnidadesCadastradas/UnitInformation'

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      {/* ------------ menu princial ----------------------------*/}
      <Route path="/Home" component={Home} />
      <Route path="/FormularioCadastro" component={FormularioCadastro} />
      <Route path="/Pessoas" component={Pessoas} />
      <Route path="/Relatorio" component={Relatorio} />

      {/* ======================sidebar direita========================== */}
      <Route path="/Unidades" component={Unidades} />
      <Route path="/Pessoas" component={Pessoas} />
      <Route path="/Equipes" component={Equipes} />
      <Route path="/Gerencias" component={Gerencias} />
      <Route path="/Atividades" component={Atividades} />
      <Route path="/Area" component={Area} />
      <Route path="/Observacoes" component={Observacoes} />

      {/* -------- relaçao de paginas da tela relatório ------------*/}
      <Route path="/UniClienteExe" component={UniClienteExe}></Route>
      <Route path="/UniClieSetor" component={UniClieSetor}></Route>
      <Route path="/MesSetor" component={MesSetor}></Route>
      <Route path="/UniContribSetor" component={UniContribSetor}></Route>
      <Route path="/ObservCpto" component={ObservCpto}></Route>
    </Switch>
  )
}

export default Routes
